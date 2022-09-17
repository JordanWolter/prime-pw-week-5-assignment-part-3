console.log('***** Music Collection *****')

let collection = [];

function addToCollection( title, artist, yearPublished ){
    const album = {
        title : title,
        artist : artist,
        yearPublished : yearPublished
    }
    
    collection.push( album );

    return album;
}

addToCollection( 'Three Cheers For Sweet Revenge', 'My Chemical Romance', '2004' );
addToCollection( 'Sometimes Things Just Disappear', 'Polar Bear Club', '2008' );
addToCollection( 'The Black Parade', 'My Chemical Romance', '2006' );
addToCollection( 'Recess', 'Skrillex', '2014' );
addToCollection( 'Somewhere Else', 'Zeds Dead', '2014' );
addToCollection( 'Crybaby', 'Lil Peep', '2016' );

console.log(collection);
