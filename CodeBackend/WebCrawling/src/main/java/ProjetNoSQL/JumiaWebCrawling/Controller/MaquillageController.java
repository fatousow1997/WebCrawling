package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.SanteBeaute.Maquillage;
import ProjetNoSQL.JumiaWebCrawling.Repository.MaquillageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/JumiaWebCrawling/santebeaute")
public class MaquillageController {

    @Autowired
    private MaquillageRepository maquillageRepository;

    @GetMapping("/maquillage")
    public List<Maquillage> getAllTv() {
        return maquillageRepository.findAll();
    }


    @GetMapping("/hello")
    public String get(){
        return "hello";

        }
}
