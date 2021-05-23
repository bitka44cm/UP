import java.util.List;

public class OfferFilter {
    private final String vendor;
    private final String validUntil;
    private final List<String> hashTags;

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
