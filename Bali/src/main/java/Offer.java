import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class Offer {
    private String id;
    private String description;
    private String createdAt;
    private String link;
    private String vendor;
    private String photoLink;
    private List<String> hashTags;
    private String discount;
    private String validUntil;
    private double rating;
    private List<String> reviews;

    public Offer(String id, String description, String createdAt, String link, String vendor, String photoLink, List<String> hashTags, String discount, String validUntil, double rating, List<String> reviews){
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.link = link;
        this.vendor = vendor;
        this.photoLink = photoLink;
        this.hashTags = new ArrayList<>(hashTags);
        this.discount = discount;
        this.validUntil = validUntil;
        this.rating = rating;
        this.reviews = new ArrayList<>(reviews);
    }

    public Offer(Offer newOffer){
        this.id = newOffer.id;
        this.description = newOffer.description;
        this.createdAt = newOffer.createdAt;
        this.link = newOffer.link;
        this.vendor = newOffer.vendor;
        this.photoLink = newOffer.photoLink;
        this.hashTags = new ArrayList<>(newOffer.hashTags);
        this.discount = newOffer.discount;
        this.validUntil = newOffer.validUntil;
        this.rating = newOffer.rating;
        this.reviews = new ArrayList<>(newOffer.reviews);
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public String getLink() {
        return link;
    }

    public String getVendor() {
        return vendor;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public String getValidUntil() {
        return validUntil;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public String getDiscount() {
        return discount;
    }

    public List<String> getReviews() {
        return reviews;
    }

    public double getRating() {
        return rating;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }

    public void setValidUntil(String validUntil) {
        this.validUntil = validUntil;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public void setReviews(List<String> reviews) {
        this.reviews = reviews;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }
}
