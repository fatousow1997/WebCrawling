package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.TabletteTactile.Tablette;
import ProjetNoSQL.JumiaWebCrawling.Model.TelephoneIphone.IphoneTel;
import ProjetNoSQL.JumiaWebCrawling.Repository.IphoneTelRepoJumia;
import ProjetNoSQL.JumiaWebCrawling.Repository.TabletteRepoJumia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9002")
@RequestMapping("/JumiaWebCrawling/tablette&telephone")
public class IphoneTelController {
    @Autowired
    private IphoneTelRepoJumia iphoneTelRepoJumia;

    @GetMapping("/Iphone")
    List<IphoneTel> getAllIphone() {
        return iphoneTelRepoJumia.findAll();

    }
}