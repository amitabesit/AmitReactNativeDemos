package amit.reactapp.api.demos;

import android.location.Address;
import android.location.Geocoder;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

public class GeocoderModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public GeocoderModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "GeocoderModule";
    }

    @ReactMethod
    public void getAddress(double latitude, double longitude, Promise promise) {
        Geocoder geocoder = new Geocoder(reactContext, Locale.getDefault());
        try {
            List<Address> addresses = geocoder.getFromLocation(latitude, longitude, 1);
            if (addresses != null && !addresses.isEmpty()) {
                Address address = addresses.get(0);
                StringBuilder addressStr = new StringBuilder();
                for (int i = 0; i <= address.getMaxAddressLineIndex(); i++) {
                    addressStr.append(address.getAddressLine(i)).append(" ");
                }
                promise.resolve(addressStr.toString().trim());
            } else {
                promise.reject("NO_ADDRESS", "No address found for location");
            }
        } catch (IOException e) {
            promise.reject("IO_EXCEPTION", e.getMessage());
        }
    }
} 