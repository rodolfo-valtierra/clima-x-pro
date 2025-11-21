	let imgs =  import.meta.glob('$lib/marcas/*.*',{eager: true})
imgs = Object.keys(imgs).map((m, i) => {
  let width = 0;
  if (i!=0) {
    width = 6;

    if (i>2 && i<5)
      width =8.5;
    else if (i==5)
      width= 9;
    else if (i>5)
      width= 10.3;
  }
  return {src: imgs[m].default, width};
})
  
	export const marcas = imgs; 

