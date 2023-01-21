package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.Electromenager.Refrigerateur;
import ProjetNoSQL.JumiaWebCrawling.Repository.RefrigerateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/JumiaWebCrawling/electromenager")
public class RefrigerateurController {

    @Autowired
    private RefrigerateurRepository refrigerateurRepository;

    @GetMapping("/refrigerateur")
    List<Refrigerateur> getAllRefrigerateur(){
        return  refrigerateurRepository.findAll();

    }



}
