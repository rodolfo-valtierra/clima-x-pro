
let images = import.meta.glob('$lib/products/*.*', {eager: true});
images = Object.keys(images).map(m=> images[m].default);

export default images;
