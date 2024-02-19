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
  let sectionName;

  setStep();

  function setStep() {
    switch ($step) {
      case STEPS.INITIALIZER:
        items = [...breads];
        sectionName = 'Pao';
        break;
      case STEPS.SEASONING:
        items = [...sauces];
        sectionName = 'Molho';
        break;
      case STEPS.SALAD:
        if ($burger.salad.length === 0) {
          setNextStep(STEPS.ADDON);
          return;
        }
        items = [...salads];
        sectionName = 'Saladas';
        break;
      case STEPS.ADDON:
        if ($burger.addOns.length === 0) {
          setNextStep(STEPS.FINISHER);
          return;
        }
        items = [...addons];
        sectionName = 'Queijos/Outros';
        break;
      case STEPS.FINISHER:
        items = [...meats];
        sectionName = 'Carne/Frango';
        break;
      case STEPS.DONE:
        items = [];
        itemsAdded = [];
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

  async function move(ev) {
    if (!ev.detail) {
      return;
    }
    resetBox(ev.detail.target);
    drop(ev.detail.item);
  }

  function resetBox(target) {
    target.style.position = 'initial';
    target.classList.remove('border-dashed');
  }

  async function drop(value, box) {
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

<DraggableZone {items} {sectionName} on:dropMe={move} />
<DropZone {itemsAdded} handleDrop={drop} {fail} />
