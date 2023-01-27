package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.Electromenager.Refrigerateur;
import ProjetNoSQL.JumiaWebCrawling.Model.TabletteTactile.Tablette;
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
public class TabletteController {
    @Autowired
    private TabletteRepoJumia tabletteRepoJumia;

    @GetMapping("/Tablette")
    List<Tablette> getAllTablette() {
        return tabletteRepoJumia.findAll();

    }
}