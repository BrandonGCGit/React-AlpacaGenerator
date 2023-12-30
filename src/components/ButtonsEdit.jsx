//🔨Const
const ACCESSORIES_OPTION = [
  'earings.png',
  'flower.png',
  'glasses.png'
]
const BG_OPTION = [
  'blue50.png',
  'darkblue30.png',
  'red50.png'
]
const EYES_OPTION = [
  'angry.png',
  'default.png',
  'panda.png',
  'naughty.png',
  'smart.png',
  'star.png'
]
const EARS_OPTION = [
  'default.png',
  'tilt-backward.png',
  'tilt-forward.png'
]
const HAIR_OPTION = [
  'bang.png',
  'curls.png',
  'default.png',
  'elegant.png',
  'fancy.png',
  'quiff.png',
  'short.png',
]
const LEG_OPTION = [
  'bubble-tea.png',
  'cookie.png',
  'default.png',
  'game-console.png',
  'tilt-backward.png',
  'tilt-forward.png'
]
const MOUTH_OPTION = [
  'astonished.png',
  'default.png',
  'eating.png',
  'laugh.png',
  'tongue.png'
]
const NECK_OPTION = [
  "bend-backward.png",
  "bend-forward.png",
  "default.png",
  'thick.png'
]
const NOSE_OPTION = [
  "nose.png"
]
const ALPACA_OPTIONS = [
  'accessories',
  'backgrounds',
  'ears',
  'eyes',
  'hair',
  'leg',
  'mouth',
  'neck',
  'noses'
]

let styles = [];

function optionSelected(option){
  styles = []

  const styleMappings = {
    "eyes": EYES_OPTION,
    "ears": EARS_OPTION,
    "backgrounds": BG_OPTION,
    "accessories": ACCESSORIES_OPTION,
    "hair": HAIR_OPTION,
    "leg": LEG_OPTION,
    "mouth": MOUTH_OPTION,
    "neck": NECK_OPTION,
    "noses": NOSE_OPTION,
  }

  const selectedStyle = styleMappings[option];

  if (selectedStyle){
    styles.push(...selectedStyle);
  }
  else{
    console.error(`Option ${option} not recognized`);
  }
}

export default function ButtonsEdit({handleOption, handleStyle, option}) {

  optionSelected(option);

  return (
    <div>
      <h2 className={"fw-bold text-light"}>Accessorize the Alpaca's</h2>
      <ul>
        {ALPACA_OPTIONS.map((asset, index) => (
            <button key={index}
              onClick={() => handleOption(asset)}
              className='btn btn-outline-dark rounded-5 py-3 px-4 mx-2 my-3 fs-5'>
              {asset.toUpperCase()}
            </button>
        ))}
      </ul>

      <h2 className={"fw-bold text-light"}>Style</h2>
      <ul>
        {styles.map((style, index) => (
            <button key={index}
              onClick={() => handleStyle(style)}
              className='btn btn-outline-dark rounded-5 py-2 px-4 mx-2 my-3'>
              {style.toUpperCase().split('.PNG')}
            </button>
        ))}
      </ul>
    </div>
  )
}