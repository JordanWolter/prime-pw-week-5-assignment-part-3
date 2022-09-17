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

function showCollection( [] ){
    
    console.log('Number of albums in the collection:', collection.length);

    for( album of collection ){
        console.log( album.title, 'by', album.artist, 'published in', album.yearPublished);
    }

}

showCollection( collection )

function findByArtist( artistSearch ){
    let artistArray = [];
    for( album of collection ){
        if( artistSearch === album.artist ){
            artistArray.push( album.artist );
        } 
    }
    return artistArray;
}

console.log( findByArtist('My Chemical Romance') );
console.log( findByArtist('$uicide Boy$') );
console.log( findByArtist('Skrillex') );