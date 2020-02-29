// //Adding click and key press  event listner for Click function

document.querySelector('.submit-btn').addEventListener("click",BookInfo);
document.querySelector('.back-btn').addEventListener("click",backTOinput);

document.addEventListener('keypress', function(event){
	if(event.keyCode === 13 || event.which === 13){
		BookInfo();


	}
});

function BookInfo(){
var row = 1;
var book = document.querySelector('.input-type').value;


if(book)
{
$.getJSON("https://www.googleapis.com/books/v1/volumes?q="+book+"&download=epub&key=AIzaSyBvd66buYhTKc1tLG_tpLUOES0IBP0ar6w",function(data){


var id = data.items[0].id;
var title = data.items[0].volumeInfo.title;
var author = data.items[0].volumeInfo.authors;
var coverImage = data.items[0].volumeInfo.imageLinks.thumbnail;
var category =  data.items[0].volumeInfo.categories;
var publisheDate = data.items[0].volumeInfo.publishedDate;
var ContentVersion = data.items[0].volumeInfo.contentVersion;
var Read = data.items[0].accessInfo.webReaderLink;



var table = document.querySelector('.table-name');
		var header = table.createTHead(0);
		
		var head_row = header.insertRow(0);
		
		var head_cell1 = head_row.insertCell(0);
		var head_cell2 = head_row.insertCell(1);
		var head_cell3 = head_row.insertCell(2);
		var head_cell4 = head_row.insertCell(3);
		var head_cell5 = head_row.insertCell(4);
		var head_cell6 = head_row.insertCell(5);
		var head_cell7 = head_row.insertCell(6);

		head_cell1.innerHTML = "Title";
		head_cell1.id = 'table-head';
		head_cell2.innerHTML = "Author";
		head_cell2.id = 'table-head';
		head_cell3.innerHTML = "Cover";
		head_cell3.id = 'table-head';
		head_cell4.innerHTML = "Categories";
		head_cell4.id = 'table-head';
		head_cell5.innerHTML = "Published Date";
		head_cell5.id = 'table-head';
		head_cell6.innerHTML = "Version";
		head_cell6.id = 'table-head';
		head_cell7.innerHTML = "Read";
		head_cell7.id = 'table-head';
	


		var tableRow = table.insertRow(row);

			var cell1 = tableRow.insertCell(0);
			var cell2 = tableRow.insertCell(1);
			var cell3 = tableRow.insertCell(2);
			var cell4 = tableRow.insertCell(3);
			var cell5 = tableRow.insertCell(4);
			var cell6 = tableRow.insertCell(5);
			var cell7 = tableRow.insertCell(6);
			var cell8 = tableRow.insertCell(7);
//Krankendaten Krankheitsregister Datenschutz
//Kurt Abt
// });
//if (book === total0){
cell1.append(title);
cell2.append(author);
var image = new Image();
image.src = coverImage;
image.id = 'imgCover';
cell3.appendChild(image);
cell4.append(category);
cell5.append(publisheDate);
cell6.append( ContentVersion);
var read_book = document.createElement('button');
read_book.innerHTML = "Read";
read_book.id = 'read_book';
cell7.appendChild(read_book);
$('#read_book').on('click',  function(){
	
	var url = 'http://play.google.com/books/reader?id='+ id +'&as_ebook=1&printsec=frontcover&source=gbs_api';
	window.open(url,'_blank');


console.log(window.location);
});


var delete_btn = document.createElement('button');
			delete_btn.innerHTML="Close";
			delete_btn.id = 'delete_btnn';
			tableRow = cell8.appendChild(delete_btn);
			$('#delete_btnn').on( 'click ',function(){
			 (head_row).remove();
			 $(this).closest ('tr').remove();
				
			});
			
			row ++;
			
			init();

//$('#notify').append(total);
//$('#notify1').append(total0);
//$('.img_div').append(image);
//$('.totalImg').append(totalItem);
// var description = data.items[0].volumeInfo.description;
// $('.description').append(description);
console.log(image);
console.log(data);
 //}
});

}
else if (!book || book !== title || book !== author)
	{
		
		var message = "* Please back to the input and fill the require input value and then press the click button";
		
		//console.log(message);
		//alert('* Please fill the require input.');
		$('#notify').append(message);
		if(message){
			$('.submit-btn').hide();
			$('.back-btn').show();
			$('.input-type').hide();

			//$('.input-type').focus();


		}
		return -1;
	}
console.log('It will be clicked');

console.log('It is clicked');

//row ++;

	
		



}
function init(){
	document.querySelector('.input-type').value = "";
	$('.input-type').focus();
	
}

//BookInfo();
function backTOinput(){
	$('.back-btn').hide();
	$('#notify').empty();
	$('.submit-btn').show();
	
	$('.input-type').show();
	$('.input-type').focus();
	

}
backTOinput();
// $('.input-type').on('keyup', function(){
// 	var value = $(this).val().toLowerCase();
// 	title.filter(function(){
// 		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
// 	});

