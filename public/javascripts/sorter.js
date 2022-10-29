// if(getTitle == "Contact List")
// {
//     arraySort();
// }

//sorting the table
module.exports.sorter =  function arraySort(array, sortByItem) 
{
    for(let i = 0; i < array.length; i++)
    {
        alert(array.sortByItem[i]);
        if(array.sortByItem[i] > array.sortByItem[i+1])
        {
            let swap = array.sortByItem[i];
            array.sortByItem[i] = array.sortByItem[i+1];
            array.sortByItem[i+1] = swap;
        }
    }
}