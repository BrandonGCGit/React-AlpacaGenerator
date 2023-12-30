

export default function ImgEditable({imgOptions}) {

  const rootPath = "./alpaca/"

  const paths = {
    backgrounds: rootPath + "backgrounds/" + imgOptions.backgrounds,
    ears: rootPath + "ears/" + imgOptions.ears,
    accessories: rootPath + "accessories/" + imgOptions.accessories,
    hair: rootPath + "hair/" + imgOptions.hair,
    neck: rootPath + "neck/" + imgOptions.neck,
    nose: rootPath + "noses/" + imgOptions.noses,
    mouth: rootPath + "mouth/" + imgOptions.mouth,
    eyes: rootPath + "eyes/" + imgOptions.eyes,
    leg: rootPath + "leg/" + imgOptions.leg,
  }


  return (
    <div className={'position-relative'}>
      <img className={'img-fluid w-100 position-absolute'} src={paths.backgrounds} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.ears} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.hair} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.neck} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.accessories} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.nose} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.mouth} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.eyes} alt="Neck"/>
      <img className={'img-fluid w-100 position-absolute'} src={paths.leg} alt="Neck"/>
    </div>
  )
}