package Baseclass;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

public class Baseclass {
public static WebDriver driver;

public static WebDriver Browserlaunch(String BrowserName) {
	
	if (BrowserName.equalsIgnoreCase("chrome")) {
		System.setProperty("webdriver.chrome.driver", ".\\src\\test\\resource\\driver\\msedgedriver.exe");
		driver=new ChromeDriver();
	} else if (BrowserName.equalsIgnoreCase("edge")) {
		System.setProperty("webdriver.edge.driver", ".\\src\\test\\resources\\driver\\msedgedriver1.exe");
		driver=new EdgeDriver();
	}
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	return driver;
}
	public static void getUrl(String url) {
try {
	driver.get(url);
} catch (Exception e) {
	System.err.println("Invalid URL :"+e.getMessage());
}
	}
	
	public static boolean elementIsdispalyed(WebElement element) {
		boolean display=false;
		try {
			display=element.isDisplayed();
		} catch (Exception e) {
			System.err.println("Element not displayed : "+e.getMessage());
		}
return display;
	}
	
	public static void elementSendKeys(WebElement element,String value) {
try {
	element.sendKeys(value);
} catch (Exception e) {
	System.err.println("Unable to Enter the value : "+e.getMessage());
}
	}
	
	public static void elementClick(WebElement element) {
try {
	element.click();
} catch (Exception e) {
	System.err.println("Unsble to Click : "+e.getMessage());
}
	}
	public static byte[] reports_Screenshot() {
		byte[] screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
	return screenshot;
	}
}
