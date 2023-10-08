function variantPugin({ addVariant }) {
  addVariant('child', '& > *');
  addVariant('child-hover', '& > *:hover');
}

const plugins = [
  variantPugin
]

export default plugins;