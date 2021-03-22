(function() {
    let adList = [
        {
            id: '1',
            description : 'Компьютеры со скидкой 40%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '40',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 4,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '2',
            description : 'Компьютеры со скидкой 2%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '2',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 4,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '3',
            description : 'Компьютеры со скидкой 44%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'ACER','s1mple'] ,
            discount : '44',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 4,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '4',
            description : 'Компьютеры со скидкой 7%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '7',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '5',
            description : 'Компьютеры со скидкой 92%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '92',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '6',
            description : 'Компьютеры со скидкой 89%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - myFriend',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'LG','s1mple'] ,
            discount : '89',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 2,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '7',
            description : 'Компьютеры со скидкой 59%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - myFriend',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '59',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 1,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '8',
            description : 'Компьютеры со скидкой 71%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'Microsoft', 's1mple'] ,
            discount : '71',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '9',
            
            description : 'Компьютеры со скидкой 39%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - myFriend',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '39',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 1,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '10',
            description : 'Компьютеры со скидкой 21%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'MacBook Air', 's1mple'] ,
            discount : '21',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '11',
            description : 'Компьютеры со скидкой 62%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '62',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 3,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '12',
            description : 'Компьютеры со скидкой 41%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '41',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 2,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '13',
            description : 'Компьютеры со скидкой 80%',
            createdAt : new Date('2021-01-21T20:12:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '80',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '14',
            description : 'Компьютеры со скидкой 85%',
            createdAt : new Date('2021-08-06T21:24:55'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '85',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 3,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '15',
            description : 'Компьютеры со скидкой 61%',
            createdAt : new Date('2021-05-21T19:42:325'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple'] ,
            discount : '61',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '16',
            description : 'Компьютеры со скидкой 92%',
            createdAt : new Date('2021-04-06T14:13:23'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple', 'DELL', 'MacBook Pro'] ,
            discount : '92',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 3,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '17',
            description : 'Компьютеры со скидкой 5%',
            createdAt : new Date('2021-07-17T21:20:21'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'DELL', 'MacBook Pro', 's1mple'] ,
            discount : '5',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 2,
            reviews : ['Xbox is better!'] ,
        },
        {
            id: '18',
            description : 'Компьютеры со скидкой 16%',
            createdAt : new Date('2021-01-04T10:13:44'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 'MacBook Pro', 'DELL', 's1mple'],
            discount : '16',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 3,
            reviews : ['Xbox is better!'],
        },
        {
            id: '19',
            description : 'Компьютеры со скидкой 70%',
            createdAt : new Date('2021-06-26T21:12:11'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple', 'MacBook Pro', 'DELL'],
            discount : '70',
            validUntil : new Date('2022-01-21T20:12:32'),
            rating : 5,
            reviews : ['Xbox is better!'],
        },
        {
            id: '20',
            description : 'Компьютеры со скидкой 88%',
            createdAt : new Date('2021-02-11T20:14:32'),
            link : 'https://PC.pl',
            vendor : 'Computers - best',
            photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
            hashtags : ['PC', 'CS', 's1mple', 'MacBook Pro', 'DELL'] ,
            discount : '88',
            validUntil : new Date('2022-01-18T22:19:42'),
            rating : 1,
            reviews : ['Xbox is better!'] ,
        }
    ]

  function getAds(skip = 0, top = 10, filterConfig){
    if (typeof skip !== 'number' || typeof top !== 'number') {
        console.log('Error with inputting types!');
        return;
    }

    let returningAdsList = adList;

    if (filterConfig){
        for (let param in filterConfig){
            if (param === 'hashtags'){
                for (let i = 0; i < filterConfig.hashtags.length; i++){
                    returningAdsList = returningAdsList.filter(item => item.hashtags.includes(filterConfig.hashtags[i]));
                }
            }
            else if (param === 'vendor'){
                returningAdsList = returningAdsList.filter(item => item.vendor === filterConfig.vendor);
            }
            else if (param === 'dateFrom'){
                returningAdsList = returningAdsList.filter(item => item.createdAt >= filterConfig.dateFrom);
            }
            else if (param === 'dateTo'){
                returningAdsList = returningAdsList.filter(item => item.createdAt < filterConfig.dateTo);
            }
        }
    }

    returningAdsList.sort(comparator);
    return returningAdsList.slice(skip, skip + top);

    function comparator(first, second) {
        if (first.createdAt < second.createdAt){
            return 1;
        }
        else if (first.createdAt > second.createdAt){
            return -1;
        }
        else{
            return 0;
        }
    }
  }

function getAd(id){
    if (typeof id === 'string'){
        return adList.find(item => item.id == id);
    }
    else{
        console.log('Incorrect type of id!')
    }
}

function validateAd(adItem){
    let parameters = ['id', 'description',  'createdAt', 'link', 'vendor', 'photoLink', 'validUntil', 'discount', 'hashtags'];
    for(let i = 0; i < parameters.length; i++){
        if(adItem[parameters[i]] == undefined){
            return false;
        }
    }
    
    for(let param in adItem){
        switch (param){
            case 'id':
                if(typeof adItem.id !== 'string' || adItem.id.length === 0){
                    return false;
                }
                break;
            case 'description':
                if(typeof adItem.description !== 'string' || adItem.description.length >= 200 || adItem.description.length === 0){
                    return false;
                }
                break;
            case 'createdAt':
                if(Object.prototype.toString.call(adItem.createdAt) !== '[object Date]'){
                    return false;
                }
                break;
            case 'link':
                if(typeof adItem.link !== 'string' || adItem.link.length === 0){
                    return false;
                }
                break;
            case 'vendor':
                if(typeof adItem.vendor !== 'string' || adItem.vendor.length === 0){
                    return false;
                }
                break;
            case 'hashtags':
                if (adItem.hashtags){
                    if (!adItem.hashtags.every(item => typeof item === 'string')){
                        return false;
                    }
                }
                break;
            case 'validUntil':
                if(Object.prototype.toString.call(adItem.validUntil) !== '[object Date]'){
                    return false;
                }
                break;
            case 'photoLink':
                if(typeof adItem.photoLink !== 'string' || adItem.photoLink.length === 0){
                    return false;
                }
                break;
            case 'discount':
                if(typeof adItem.discount !== 'string' || adItem.discount.length === 0){
                    return false;
                }
                break;
            case 'reviews':
                if (adItem.reviews){
                    if (!adItem.reviews.every(item => typeof item === 'string')){
                        return false;
                    }
                }
                break;
            case 'rating':
                if(typeof adItem.rating !== 'number' || adItem.rating.length === 0){
                    return false;
                }
                break;
            default:
                console.log('Something went wrong :(');
                return false;
        }
    }
    return true;
}

function addAd (adItem){
    if(validateAd(adItem)){
        adList.push(adItem);
        return true;
    }
    else{
        console.log('offer isn\'t correct');
        return false;
    }
}

function editAd(id, adItem){
    for(let parameteres in adItem){
        if(parameteres === 'id' || parameteres === 'vendor' || parameteres === 'createdAt'){
            console.log('you can\'t change id, vendor name, createdAt');
            return false;
        }
    }
    
    let cloneOffer = {};
    let bufOffer = getAd(id);
    for(let key in bufOffer){
        cloneOffer[key] = bufOffer[key];
    }
    for(let param in adItem){
        cloneOffer[param] = adItem[param];
    }
    if(!validateAd(cloneOffer)){
        console.log('new offer isn\'t validated');
        return false;
    }
    
    for (let key in cloneOffer){
        bufOffer[key] = cloneOffer[key];
    }
    return true;
}

function removeAd (id){
    if (typeof id === 'string'){
        let index = adList.findIndex(post => post.id === id);
        if (index !== -1){
            adList.splice(index, 1);
            return true;
        }
    }
    return false;
}

  // Test
console.log('Top 5 adsList');
console.log(getAds(0, 5));

console.log('Top 3 posts, skip 1 posts, hashtags: MacBook Pro, DELL');
console.log(getAds(1, 3, {hashtags: ['DELL', 'MacBook Pro']}));

console.log('Get 2 posts with vendor - "Computers - myFriend"' );
console.log(getAds(0, 2, {vendor: 'Computers - myFriend'}));

console.log('Get item on id = 3');
console.log(getAd('3'));

console.log('try to get item on id = 10, where id is number');
console.log(getAd(10));

console.log('try to Get item on id = 26');
console.log(getAd('26'));

console.log('Check offer on ValidateAd');
console.log(validateAd({
    id: '19',
    description : 'Компьютеры со скидкой 70%',
    createdAt : new Date('2021-06-26T21:12:11'),
    link : 'https://PC.pl',
    vendor : 'Computers - best',
    photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
    hashtags : ['PC', 'CS', 's1mple', 'MacBook Pro', 'DELL'] ,
    discount : '70',
    validUntil : new Date('2022-01-21T20:12:32'),
    rating : 5,
    reviews : ['Xbox is better!']
}))

console.log('add offer with id = 21. Then get this offer.');
console.log(addAd({
    id: '21',
    description : 'Компьютеры со скидкой 70%',
    createdAt : new Date('2021-06-26T21:12:11'),
    link : 'https://PC.pl',
    vendor : 'Computers - best',
    photoLink : 'https://lh3.googleusercontent.com/proxy/n4y3C7gnmGV4SOVmkE2DoLGua_DNkt9Nyrnth8-gXnbO_xFewvtRi3ztskcGA4G1mwE45gvXpq_1rWX1VYLXJbh9jJGUc3x0E6exe2T9F1LLN5ZgL4d8KZy4SoaGo9IlVQGFY6mDTznWSptH9XZIf-lK',
    hashtags : ['PC', 'CS', 's1mple', 'MacBook Pro', 'DELL'],
    discount : '70',
    validUntil : new Date('2022-01-21T20:12:32'),
    rating : 4.2,
    reviews : ['Xbox is better!']
}));
console.log(getAd('21'));

console.log('edit 19 offer: change description and rewies');
console.log(editAd('19', {
    description : 'Изменили краткое описание!',
    reviews : ['Playstation is better!']
}));
console.log(getAd('19'));

console.log('doesn\'t edit 19 offer, because we try to change vendor name!');
console.log(editAd('19', {
    vendor: 'Masha',
    description : 'Изменили краткое описание!',
    reviews : ['Playstation is better!']
}));


console.log('remove 18 offer');
console.log(removeAd('18'));
console.log(getAd('18'));

console.log('try to remove 25 offer, that doesn\'t exist');
console.log(removeAd('25'));

}());
