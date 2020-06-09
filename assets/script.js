

function renderCoverLetterModal() {
    let coverLetter = $('.coverLetterBody');
// INITIALIZE MODALS
$(document).ready(function () {
    $(".modal").modal();
  });
}

$('.cover-letter').click(function () {
    renderCoverLetterModal();
})