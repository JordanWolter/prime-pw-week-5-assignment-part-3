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

console.log( collection );

function showCollection( [] ){
    console.log( 'Number of albums in the collection:', collection.length );
    for( album of collection ){
        console.log( album.title, 'by', album.artist, 'published in', album.yearPublished );
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
    return console.log( artistArray );
}

findByArtist( 'My Chemical Romance' );
findByArtist( '$uicide Boy$' );
findByArtist( 'Skrillex' );

function search( criteria ){
    let match = [];
    for( album of collection ){
        if( typeof criteria === "undefined" ){
            return console.log( collection );
        }else if( criteria.artist === album.artist && criteria.yearPublished === album.yearPublished ){
            match.push( album );
        }
    } 
    return console.log( match );
}



search( {artist: 'Skrillex', yearPublished: '2014'} );
search( {artist: 'Lil Peep', yearPublished: '2016'} );
search( {artist: 'Wu tang', yearPublished: '2002'} );
search(  );

