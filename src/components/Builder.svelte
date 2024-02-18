<script>
  import {tick} from 'svelte';
  import {
    IBread,
    STEPS,
    burger,
    step,
    ISalad,
    ISauces,
    updateBurger,
    updateStep,
    IAddOn,
    IMeat,
    setAppStatusDone,
  } from 'src/store';
  import {ingredients, useValidate} from 'src/utils/hooks';
  import DropZone from './DropZone.svelte';
  import DraggableZone from './DraggableZone.svelte';

  let items = [];
  let itemsAdded = [];
  let {addons, breads, salads, sauces, meats} = $ingredients;
  let fail;

  setStep();

  function setStep() {
    switch ($step) {
      case STEPS.INITIALIZER:
        items = [...breads];
        break;
      case STEPS.SEASONING:
        items = [...sauces];
        break;
      case STEPS.SALAD:
        items = [...salads];
        break;
      case STEPS.ADDON:
        items = [...addons];
        break;
      case STEPS.FINISHER:
        items = [...meats];
        break;
      case STEPS.DONE:
        items = [...itemsAdded];
        setAppStatusDone();
        break;

      default:
        break;
    }
  }

  function setNextStep(nextStep) {
    updateStep(nextStep);
    setStep();
  }

  function handleDrop(value, enumType, list, nextStep, property) {
    const validate = useValidate(value, enumType, list);
    if (!validate) {
      fail = true;
      return;
    }

    const {name, item} = validate;

    items = items.filter(b => b !== name);
    itemsAdded = [...itemsAdded, value];
    const left = list.filter(s => s !== item);

    if (left.length === 0) {
      setNextStep(nextStep);
      return;
    }
    updateBurger({...$burger, [property]: [...left]});
  }

  async function drop(value) {
    fail = false;
    await tick();
    if ($step === STEPS.INITIALIZER) {
      const breadName = value;
      const bread = IBread[breadName];

      if (bread !== $burger.bread) {
        fail = true;
        await tick();
        return;
      }
      breads = breads.filter(b => b !== breadName);
      itemsAdded = [...itemsAdded, value];
      setNextStep(STEPS.SEASONING);
      return;
    }

    if ($step === STEPS.SEASONING) {
      handleDrop(value, ISauces, $burger.sauces, STEPS.SALAD, 'sauces');
      return;
    }

    if ($step === STEPS.SALAD) {
      handleDrop(value, ISalad, $burger.salad, STEPS.ADDON, 'salad');
      return;
    }

    if ($step === STEPS.ADDON) {
      handleDrop(value, IAddOn, $burger.addOns, STEPS.FINISHER, 'addOns');
      return;
    }

    if ($step === STEPS.FINISHER) {
      handleDrop(value, IMeat, $burger.meat, STEPS.DONE, 'meat');
      return;
    }
  }
</script>

<DraggableZone {items} />
<DropZone {itemsAdded} handleDrop={drop} {fail} />
