package com.url.shortener.controller;

import com.url.shortener.models.UrlMapping;
import com.url.shortener.repository.ClickEventRepository;
import com.url.shortener.repository.UrlMappingRepository;
import com.url.shortener.service.UrlMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class RedirectController {

    @Autowired
    private UrlMappingService urlMappingService;

    @Autowired
    private UrlMappingRepository urlMappingRepository;

    @Autowired
    private ClickEventRepository clickEventRepository;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(@PathVariable String shortUrl){
        UrlMapping urlMapping = urlMappingService.getOriginalUrl(shortUrl);
        if(urlMapping!=null){
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add("Location", urlMapping.getOriginalUrl());
            return ResponseEntity.status(302).headers(httpHeaders).build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    public UrlMapping getOriginalUrl(String shortUrl){
//        UrlMapping urlMapping = urlMappingRepository.findByShortUrl(shortUrl);
//        if(urlMapping!=null){
//            urlMapping.setClickCount(urlMapping.getClickCount()+1);
//            urlMappingRepository.save(urlMapping);
//
//            //Record click event
//            ClickEvent clickEvent = new ClickEvent();
//            clickEvent.setClickDate(LocalDateTime.now());
//            clickEvent.setUrlMapping(urlMapping);
//            clickEventRepository.save(clickEvent);
//        }
//        return urlMapping;
//   }
}
