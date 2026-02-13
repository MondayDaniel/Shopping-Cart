  // Event handler
  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    // Element selections
    const minusBtn = document.querySelectorAll('.fa-minus-circle');
    const plusBtn = document.querySelectorAll('.fa-plus-circle');
    const trash = document.querySelectorAll('.fa-trash-alt');
    const heartbtn = document.querySelectorAll('.fa-heart');
    const carditem = document.querySelectorAll('.card');
    

      // function to Implement
        //  calculate and update total price
 function updateTotalPrice() { 
  let total = 0;
  carditem.forEach(item => {
    let price = parseFloat(item.querySelector('.unit-price').textContent);
    let quantity = parseInt(item.querySelector('.quantity').textContent);
    total += price * quantity;
  });
  document.querySelector('.total').textContent = total.toFixed(2);
 }

   // function to Implement quantity adjustment
  function adjustQuantity(itemId, change) {
    // selections the specific quantity
    const quantity = document.querySelector(`.quantity[data-item-id="${itemId}"]`);
    if (quantity) {
      let newQuantity = parseInt(quantity.textContent);
      newQuantity += change;
      if (newQuantity < 1) {
        newQuantity = 1;
      }
       quantity.textContent = newQuantity;  
       updateTotalPrice();
    }
  }

      // Event listener
         // Event listener liking item
    heartbtn.forEach(button => {
     button.addEventListener('click', () => {
       button.classList.toggle('liked');
     });
   }); 

     // Event listener to all button '+' and '-'
    // plusBtn
     plusBtn.forEach(button => {
      button.addEventListener('click', () => {
         const itemId = button.getAttribute('data-item-id');
        adjustQuantity(itemId, 1);
      });
   });

     // minusBtn
      minusBtn.forEach(button => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-item-id');
      adjustQuantity(itemId, -1);
    });
   });

    // Implement item delete 
    trash.forEach(button => {
      button.addEventListener('click', function() {
      this.closest('.card').remove();
      });
    });

})



  

