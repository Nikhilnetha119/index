
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';
// // items[1].style.fontWeight = 'bold';
// // items[0].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }
// var li = document.getElementsByTagName('li');
// console.log(li);

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display = 'none';

var seconditem = document.querySelectorAll('li');
seconditem[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}