
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 

let imgSlider = document.getElementById('imgSlider');
let elem = 0;
function showimg(ev) {
    ev.target.style = "border: 2px solid orange  ; cursor: pointer;"
    imgSlider.src = ev.target.src

    if (elem == 0) {
        elem = ev
    } else {
        hideBorder(elem)
        elem = ev
    }

}

function hideBorder(ele) {
    console.log(ele);
    ele.target.style="border:none "
    // ele.target.style="border: 2px solid black ; cursor: pointer"
}



// let zoom = document.getElementById('zoom');
// zoom.style.backgroundColor="red"
// zoom.addEventListener('click',() => {
//     alert("fffffffff")
//     zoom.innerHTML =`<!-- Button trigger modal -->
    
//   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Launch demo modal
//   </button>
  
//   <!-- Modal -->
//   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//           ...
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//           <button type="button" class="btn btn-primary">Save changes</button>
//         </div>
//       </div>
//     </div>
//   </div>
//   `
// })