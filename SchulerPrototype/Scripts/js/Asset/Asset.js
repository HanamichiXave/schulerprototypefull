 $('body').data('open_modals', 0);
 $(".modal-draggable .modal-dialog").draggable({
   handle: ".modal-header",
   containment: 'document',
   addClasses: false,
   cursor: 'move'
 });
 $('#modal1,#modal2').on('hidden.bs.modal', function(event) {
   $(this).removeClass('modal-stack');
   $('body').data('open_modals', $('body').data('open_modals') - 1);
 });
 $('#modal1,#modal2').on('show.bs.modal', function(event) {
   $(this).find('.modal-dialog').css({
     top: "0px",
     left: "0px",
   });
 });
 $('#modal1,#modal2').on('shown.bs.modal', function(event) {
   var e = $(this),
     modalSize = ($('body').data('open_modals') + 1);
   var modalZIndex = (1040 + (10 * modalSize));
   if (e.hasClass('modal-stack')) {
     return;
   }
   e.addClass('modal-stack');
   $('body').data('open_modals', modalSize);
   e.css('z-index', modalZIndex);
   $('.modal-backdrop').not('.modal-stack').css('z-index', (modalZIndex - 1)).addClass('modal-stack');
 });
