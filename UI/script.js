class AdList {
    _adList = [];
    
    constructor (adList){
        this._adList = adList.concat();
    }

    get(id){
        if (typeof id === 'string'){
            return this._adList.find(item => item.id == id);
        }
        else{
            console.log('Incorrect type of id!');
        }
    }

    getPage(skip = 0, top = 10, paramFilter){
        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error with inputting types!');
            return;
        }
    
        let returningAdsList = this._adList.concat();
        if (paramFilter){
            for (let param in paramFilter){
                if (param === 'hashtags'){
                    for (let i = 0; i < paramFilter.hashtags.length; i++){
                        returningAdsList = returningAdsList.filter(item => item.hashtags.includes(paramFilter.hashtags[i]));
                    }
                }
                else if (param === 'vendor'){
                    returningAdsList = returningAdsList.filter(item => item.vendor === paramFilter.vendor);
                }
                else if (param === 'dateFrom'){
                    returningAdsList = returningAdsList.filter(item => item.createdAt >= paramFilter.dateFrom);
                }
                else if (param === 'dateTo'){
                    returningAdsList = returningAdsList.filter(item => item.createdAt < paramFilter.dateTo);
                }
            }
        }
        returningAdsList.sort(comparator);
        if(this._adList.length >= top){
            return returningAdsList.slice(skip, skip + top);
        }
        else{
            return returningAdsList.slice(skip, skip + this._adList.length);
        }
        function comparator(first, second) {
            return second.createdAt - first.createdAt;
        }
    }

    static validate (adItem){
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

    add(adItem){
        if(AdList.validate(adItem)){
            if (this._adList.filter(offer => offer['id'] === adItem['id']).length === 0){
                this._adList.push(adItem);
                return true;
            }
            else{
                console.log('this offer can\'t added, because your collection containes offer with this id');
                return false;
            }
        }
        else{
            console.log('offer isn\'t validated');
            return false;
        }
    }

    edit(id, adItem){
        for(let parameteres in adItem){
            if(parameteres === 'id' || parameteres === 'vendor' || parameteres === 'createdAt'){
                console.log('you can\'t change id, vendor name, createdAt');
                return false;
            }
        }
        
        let cloneOffer = {};
        let bufOffer = this.get(id);
        for(let key in bufOffer){
            cloneOffer[key] = bufOffer[key];
        }
        for(let param in adItem){
            cloneOffer[param] = adItem[param];
        }
        if(!AdList.validate(cloneOffer)){
            console.log('new offer isn\'t validated');
            return false;
        }
        
        for (let key in cloneOffer){
            bufOffer[key] = cloneOffer[key];
        }
        return true;
    }

    remove(id){
        if (typeof id === 'string'){
            let index = this._adList.findIndex(offer => offer.id === id);
            if (index !== -1){
                this._adList.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    addAll(adList){
        let unvalidatedOffers = adList.filter(offer => !this.add(offer));
        return unvalidatedOffers;
    }

    clear(){
        this._adList.splice(0, this._adList.length);
    }
}

class View {
    _offers;
    _username;
    _vendorStatus;
    _tegOffersList;
    _offerTmp;

    constructor(offerList, username, vendorStatus){
        this._offers = new AdList(offerList);
        this._username = username;
        this._vendorStatus = vendorStatus;
        this._tegOffersList = document.querySelector('.offers_list');
        this._offerTmp = document.querySelector('.offer');
        let deletedOffer = document.querySelector('.offer');
        deletedOffer.remove();
    }

    showStatus(){
        if(this._username === null || this._username.length === 0) {
            document.querySelector('.Sign_in').textContent = 'Log in';
            document.querySelector('.door').style.visibility = 'hidden';
        }
        else{
            document.querySelector('.Sign_in').textContent = this._username;
        }
    }

    _fillOffer(offer){
        var newOffer = document.importNode(this._offerTmp, true);
        newOffer.querySelector('.photo').setAttribute('src', offer.photoLink);
        newOffer.querySelector('.discount').textContent = offer.discount + '%';
        newOffer.querySelector('.validUntil').textContent = "untill " + offer.validUntil.getDate() + "." + (offer.validUntil.getDate() + 1) + "." + offer.validUntil.getFullYear();
        newOffer.querySelector('.vendor_name').textContent = offer.vendor;
        offer.hashtags.forEach(tag => {
            newOffer.querySelector('.hashtags').textContent += "#" + tag + " ";
        });
        newOffer.querySelector('.short_description').textContent = offer.description;
        offer.reviews.forEach(comment => {
            let review = document.createElement('span');
            review.textContent = comment;
            newOffer.querySelector('.comments').append(review);
            newOffer.querySelector('.comments').append(document.createElement('br'));
        });
        newOffer.querySelector('.link_to_website').textContent = offer.link;
        newOffer.querySelector('.link_to_website').setAttribute('href', offer.link);
        newOffer.querySelector('.rating').textContent = offer.rating + ' / 5 rating';
        if(this._username === null || this._username.length === 0){
            newOffer.querySelector('.icons').style.visibility = 'hidden';
        }
        else if(this._vendorStatus === true){
            newOffer.querySelector('.iconComment').style.visibility = 'hidden';
        }
        else{
            newOffer.querySelectorAll('.iconCustomer').forEach(bottom => bottom.style.visibility = 'hidden');
        }
        return newOffer;
    }

    showOffers() {
        document.querySelectorAll('.offer').forEach(offer => offer.remove());
        let button = document.querySelector('.button_load_more');
        this._offers.getPage().forEach(offer => button.before(this._fillOffer(offer)));
    }

    addOffer(offer){
        if(this._offers.add(offer)){
            this.showOffers();
            return true;
        }
        return false;
    }

    removeOffer(id){
        if(this._offers.remove(id)){
            this.showOffers();
            return true;
        }
        return false;
    }

    editOffer(id, offer){
        if(this._offers.edit(id, offer)){
            this.showOffers();
            return true;
        }
        return false;
    }
}

//Test

var view = new View([
    {
        id: '1',
        description : 'Компьютеры со скидкой 40%',
        createdAt : new Date('2020-01-21T20:12:32'),
        link : 'https://PC.pl',
        vendor : 'Computers - best',
        photoLink : 'data:image/jpeg;base64,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',
        hashtags : ['PC', 'CS', 's1mple'],
        discount : '40',
        validUntil : new Date('2022-01-21T20:12:32'),
        rating : 3.8,
        reviews : ['Xbox is better!'],
    },
    {
        id: '2',
        description : 'Компьютеры со скидкой 2%',
        createdAt : new Date('2019-01-21T20:12:32'),
        link : 'https://PC.pl',
        vendor : 'Computers - best',
        photoLink : 'data:image/jpeg;base64,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',
        hashtags : ['PC', 'CS', 's1mple'] ,
        discount : '2',
        validUntil : new Date('2019-01-21T20:12:32'),
        rating : 4.2,
        reviews : ['Xbox is better!'],
    },
    {
        id: '3',
        description : 'Компьютеры со скидкой 44%',
        createdAt : new Date('2021-01-21T20:12:32'),
        link : 'https://PC.pl',
        vendor : 'Computers - best',
        photoLink : 'data:image/jpeg;base64,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',
        hashtags : ['PC', 'CS', 'ACER','s1mple'],
        discount : '44',
        validUntil : new Date('2023-01-21T20:12:32'),
        rating : 4,
        reviews : ['Xbox is better!', 'MacBook is the best computer !', 'MacOS is the best OS'],
    },
    {
        id: '4',
        description : 'Компьютеры со скидкой 7%',
        createdAt : new Date('2009-01-21T20:12:32'),
        link : 'https://PC.pl',
        vendor : 'Computers - best',
        photoLink : 'data:image/jpeg;base64,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',
        hashtags : ['PC', 'CS', 's1mple'],
        discount : '7',
        validUntil : new Date('2022-01-21T20:12:32'),
        rating : 5,
        reviews : ['Xbox is better!'],
    }
], 'Artyom Mogilevchik', true);

view.showStatus();
view.showOffers();

view.addOffer({
    id: '5',
        description : 'Компьютеры со скидкой 26%',
        createdAt : new Date('2025-01-21T20:12:32'),
        link : 'https://PC.pl',
        vendor : 'Computers - best',
        photoLink : 'data:image/jpeg;base64,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',
        hashtags : ['PC', 'CS', 's1mple', 'addedOffer'],
        discount : '7',
        validUntil : new Date('2022-01-21T20:12:32'),
        rating : 5,
        reviews : ['Xbox is better!'],
})

view.removeOffer('5');
view.editOffer('3', {description : 'Change description by edit method !', hashtags : ['BSU', 'FAMCS']});