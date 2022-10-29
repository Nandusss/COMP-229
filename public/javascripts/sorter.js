// if(getTitle == "Contact List")
// {
//     arraySort();
// }

//sorting the table

function arraySort(array) 
{
    for(let i = 0; i < array.length; i++)
    {
        if(array.name[i] > array.name[i+1])
        {
            let swap = array.name[i];
            array.name[i] = array.name[i+1];
            array.name[i+1] = swap;
        }
    }
}

module.exports.sorter =  arraySort;