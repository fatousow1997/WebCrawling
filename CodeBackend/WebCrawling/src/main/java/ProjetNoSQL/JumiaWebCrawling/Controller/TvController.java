package ProjetNoSQL.JumiaWebCrawling.Controller;

import ProjetNoSQL.JumiaWebCrawling.Model.Electronic.Tv;
import ProjetNoSQL.JumiaWebCrawling.Repository.TvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:9002")
@RequestMapping("/JumiaWebCrawling/electronic")
public class TvController {

    @Autowired
    private TvRepository tvRepository;

    @GetMapping("/tv")
    public List<Tv> getAllTv() {
        return tvRepository.findAll();
    }


    @GetMapping("/hello")
    public String get(){
        return "hello";

        }
}
