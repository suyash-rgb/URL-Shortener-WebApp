package com.url.shortener.controller;

import com.url.shortener.dtos.ClickEventDTO;
import com.url.shortener.dtos.UrlMappingDTO;
import com.url.shortener.models.User;
import com.url.shortener.service.UrlMappingService;
import com.url.shortener.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/urls")
public class UrlMappingController {

    //Long Url --> short url(8 character)

    @Autowired
    private UrlMappingService urlMappingService;

    @Autowired
    private UserService userService;

    //{"":""} {"originalUrl" : "https:example.com"}
    // https://abc.com/QN7X0a0a --> https://example.com
    @PostMapping("/shorten")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<UrlMappingDTO> createShortUrl(@RequestBody Map<String, String> request,
                                                        Principal principal){
        String originalUrl = request.get("originalUrl");
        User user = userService.findByUsername(principal.getName());
        //Call Service
        UrlMappingDTO urlMappingDTO = urlMappingService.createShortUrl(originalUrl, user);
        return ResponseEntity.ok(urlMappingDTO);

    }

    @GetMapping("/myUrls")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<UrlMappingDTO>> getUserUrls(Principal principal){
        //getting the user with help of security context
        User user = userService.findByUsername(principal.getName());
        //getting urls for a particular user
        List<UrlMappingDTO> urls = urlMappingService.getUrlsByUser(user);
        return ResponseEntity.ok(urls);
    }

    @GetMapping("/analytics/{shortUrl}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
                                                               @RequestParam("startDate") String startDate,
                                                               @RequestParam("endDate") String endDate) {
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        // 2025-12-01T00:00:00
        LocalDateTime start = LocalDateTime.parse(startDate, formatter);
        LocalDateTime end = LocalDateTime.parse(endDate, formatter);
        List<ClickEventDTO> clickEventDTOS = urlMappingService.getClickEventsByDate(shortUrl, start, end);
        return ResponseEntity.ok(clickEventDTOS);
    }

    @GetMapping("/totalClicks")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDate, Long>> getTotalClicksByDate(Principal principal,
                                                                     @RequestParam("startDate") String startDate,
                                                                     @RequestParam("endDate") String endDate){
        DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
        User user = userService.findByUsername(principal.getName());
        LocalDate start = LocalDate.parse(startDate, formatter);
        LocalDate end = LocalDate.parse(endDate, formatter);
        Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(user, start, end);
        return ResponseEntity.ok(totalClicks);

    }

    @GetMapping("/totalclicksByDateTime")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Map<LocalDateTime, Long>> getTotalClicksByDateTime(
            Principal principal,
            @RequestParam("startDateTime") String startDateTime,
            @RequestParam("endDateTime") String endDateTime) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        User user = userService.findByUsername(principal.getName());
        LocalDateTime start = LocalDateTime.parse(startDateTime, formatter);
        LocalDateTime end = LocalDateTime.parse(endDateTime, formatter);
        Map<LocalDateTime, Long> clickData = urlMappingService.getTotalClicksByUserAndDateTime(user, start, end);
        return ResponseEntity.ok(clickData);
    }



}
