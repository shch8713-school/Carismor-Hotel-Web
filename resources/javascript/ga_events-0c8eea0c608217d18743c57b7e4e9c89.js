jQuery(document).ready(function() {
    //inline added to every matching link
    jQuery('a[href*="tickets.casinodelsol.com"]').attr("onclick", "_gaq.push(['_trackEvent', 'Button', 'Click', 'Buy Tickets']);");
    jQuery('form[name="surveysubmit3080"]').attr("onsubmit", "_gaq.push(['_trackEvent', 'Forms', 'submission', 'Newsletter - Signup']);");
    jQuery('form[id*="hotel-reservations"]').attr("onsubmit", "ga('send', 'event', 'Forms', 'submission', 'Make A Reservation');");
});
