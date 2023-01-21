package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.Informatique.OrdinateurImprimante;
import ProjetNoSQL.JumiaWebCrawling.Repository.OrdinateurImprimanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/JumiaWebCrawling/informatique")
public class OrdinateurImprimanteController {

    @Autowired
    private OrdinateurImprimanteRepository ordinateurImprimanteRepository;

    @GetMapping("/ordinateurimprimante")
    List<OrdinateurImprimante> getAllRefrigerateur(){
        return  ordinateurImprimanteRepository.findAll();

    }



}
