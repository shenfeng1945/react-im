export const createNotifi = (text= '',type = 'success') => {
   const dom = document.createElement('div');
   dom.classList = `notification ${type}`;
   dom.innerHTML = `
     <svg class="icon-16">
       <use xlink:href=#icon-${type}></use>
     </svg>
     <span style="margin-left:5px">${text}</span>
   `;
   document.body.appendChild(dom);
   setTimeout(()=>{
     document.body.removeChild(dom)
   },2000)
}