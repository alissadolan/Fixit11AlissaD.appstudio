

rdoPersonType1.onclick=function(){
  switch(rdoPersonType1.value) {
    case 0:
      lblDesc.value = `I would agree that you are an optimistic person too!`
    case 1:
      lblDesc.value = `I would agree that you are a pessimistic person too!`
    case 2:
      lblDesc.value = `I would agree that you are a trusting person too!`
    case 3:
      lblDesc.value = `I would agree that you are an envious person too!`
    }
}

btnToExercise.onclick=function(){
  ChangeForm(favExercises)
}
