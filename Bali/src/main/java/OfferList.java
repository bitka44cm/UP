import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public class OfferList {
    private List<Offer> offers;

    public OfferList(){
        offers = new ArrayList<>();
    }

    public Offer getOffer(String id) {
        for(Offer offer : offers) {
            if (offer.getId().equals(id)) {
                return offer;
            }
        }
        System.out.println("Incorrect type of id!");
        return null;
    }

    public static boolean validateOffer(Offer offer) {
        final int MAX_COUNT_HASHTAGS = 7;
        if (offer.getId() != null && offer.getId().length() != 0 &&
        offer.getDescription() != null && offer.getDescription().length() != 0 &&
        offer.getCreatedAt() != null && offer.getCreatedAt().length() != 0 &&
        offer.getLink() != null && offer.getLink().length() != 0 &&
        offer.getVendor() != null && offer.getVendor().length() != 0 &&
        offer.getHashTags() != null && offer.getHashTags().size() != 0 && offer.getHashTags().size() <= MAX_COUNT_HASHTAGS &&
        offer.getValidUntil() != null && offer.getValidUntil().length() != 0 &&
        offer.getPhotoLink() != null && offer.getPhotoLink().length() != 0 &&
        offer.getDiscount() != null && offer.getDiscount().length() != 0 &&
        offer.getReviews() != null && offer.getReviews().size() != 0){
            return true;
        }
        return false;
    }

    public boolean addOffer(Offer offer) {
        if (OfferList.validateOffer(offer) && getOffer(offer.getId()) == null) {
            offers.add(offer);
            return true;
        }
        return false;
    }

    public boolean editOffer(String id, Offer offer) {
        if (offer.getId() != null || offer.getVendor() != null || offer.getCreatedAt() != null) {
            return false;
        }
        Offer newOffer = getOffer(id);
        if (offer.getDescription() != null) {
            newOffer.setDescription(offer.getDescription());
        }
        if (offer.getLink() != null) {
            newOffer.setLink(offer.getLink());
        }
        if (offer.getHashTags() != null) {
            newOffer.setHashTags(offer.getHashTags());
        }
        if (offer.getValidUntil() != null) {
            newOffer.setValidUntil(offer.getValidUntil());
        }
        if (offer.getPhotoLink() != null) {
            newOffer.setPhotoLink(offer.getPhotoLink());
        }
        if (offer.getDiscount() != null) {
            newOffer.setDiscount(offer.getDiscount());
        }
        if (offer.getReviews() != null) {
            newOffer.setReviews(offer.getReviews());
        }
        if (offer.getRating() != 0) {
            newOffer.setRating(offer.getRating());
        }
        return true;
    }

    public boolean removeOffer(String id) {
        if (getOffer(id) != null) {
            offers.remove(getOffer(id));
            return true;
        }
        return false;
    }

    public List<Offer> getPage(int skip, int top, OfferFilter offerFilter) {
        List<Offer> bufOfferList = new ArrayList<>();
        if (skip >= offers.size()) {
            return null;
        }
        int amountOffers = offers.size();
        for (int i = skip; i < amountOffers && top > 0; i++) {
            if (offers.get(i).getVendor().equals(offerFilter.getVendor()) ||
                    offers.get(i).getValidUntil().equals(offerFilter.getValidUntil()) ||
                    offers.get(i).getHashTags().containsAll(offerFilter.getHashTags())) {
                bufOfferList.add(offers.get(i));
                top--;
            }
        }
        return bufOfferList.stream().sorted((offer1, offer2) -> {
            SimpleDateFormat formatter = new SimpleDateFormat("dd.MM.yyyy", Locale.ENGLISH);
            try {
                Date date1 = formatter.parse(offer1.getCreatedAt());
                Date date2 = formatter.parse(offer2.getCreatedAt());
                return date1.compareTo(date2);
            }
            catch (ParseException e) {
                e.printStackTrace();
            }
            return 0;
        }).collect(Collectors.toList());
    }
}
