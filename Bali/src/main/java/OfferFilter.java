import java.util.List;

public class OfferFilter {
    private String vendor;
    private String validUntil;
    private List<String> hashTags;

    public OfferFilter(String vendor, String validUntil, List<String> hashTags){
        this.vendor = vendor;
        this.validUntil = validUntil;
        this.hashTags = hashTags;
    }

    public String getVendor() {
        return vendor;
    }

    public String getValidUntil() {
        return validUntil;
    }

    public List<String> getHashTags() {
        return hashTags;
    }
}
