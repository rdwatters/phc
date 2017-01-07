## Informal (i.e, Pathology) Audit

> I originally had an "SEO" section, but almost everything I've listed will have an effect on search.

### Code and Performance

* Add the URL of your site to your Twitter profile (already in a tweet, but have it as a fixed attribute under your information)
* Wordpress creates a lot of bloat, especially for a blog this simple; simplicity, by the way, is a good thing.
* Your current mobile Pagespeed score is [62/100][]. Here are some easy wins:
  * Minify and concatenate CSS files
  * Inline your critical render path (ie, remove calls to static assets for above-the-fold content)
  * Optimize *every* image before you upload it to your site. I'm sure there are plugins that do this auto-magically within the WP ecosystem, but I really dig [compressor.io][] as a simple, browser-base, drag-and-drop solution.
  * Minify, concatenate, and uglify your javascript
  * Set longer cache headers for static assets
* For further insight into your mobile strategy, [Google's new mobile tool][] is pretty snazzy (and you're passing, btw).
* The `yyyy/mm/dd` is a common but dated (pun intended!) [URL structure][] for blog posts. Also, [Moz][]

### Social Media, Sharing, Branding

* Create a [favicon] for desktop browser tabs and smart phone homescreens
* Add a "share" button that can be used for individual blog posts; I've heard good things about [Social Welfare][]
* Once you've created a few more articles, move away from a WordPress subdomain to a customer URL. I'd recommend Namecheap over Godaddy. `doctorricheypathology` and `richeypathology.com` are both available for [$11][]
  * **Related:** What's the reasoning behind "i.e." pathology? "I.e." is the initialism for the Latin *id est*, which translates roughly to "that is" as a point of clarification to (typically) the noun phrase that precedes it. Just something to consider. If the idea is to discuss all matters of pathology in a more formal, academic way, I think "On Pathology" is more typical as an umbrella title to discuss a discipline. `onpathology.com` is also [about $11][] on Namecheap.
* This might be difficult, but I believe that the WordPress ecosystem offers a plugin for accelerated mobile pages (AMP). This adds an additional extension to each HTML page that tells Google to add a minimalist, "instant" version of the page to their caches (which will always be faster than hosting the pages yourself). This also helps your showing in SERPs because people can access content as a "card" from within Google's interface.
* Add Twitter card metadata for better sharing; my test on the [Twitter card validator][] showed it was unable to render a preview.
* Add [Open Graph Protocol][] *image* to your homepage (specifically for Facebook shares). It looks like you are already running Jetpack, which is great. Keep adding a relevant image to each post, but perhaps defining a default branded image (eg, a PNG of you logo) will help shares since your site is currently only 1 page. Here's the [FB dev tester][]
* **Comments** You currently have a CTA for comments at the bottom of the first post on the homepage, but no commenting section is available. I appreciate this is only the case on the home feed, but it's important to make your CTAs intuitive and easily actionable. I don't have a strong opinion on WP's native commenting vs [Disqus][], so I think you're in a good spot on the individual posts.

### Extensibility and Single Sourcing

* Write your content in [markdown][] for [easier exporting and maintainability](http://mediatemple.net/blog/tips/you-should-probably-blog-in-markdown/) and create-once-publish-everywhere potential (COPE)
* Be mindful of web semantics. For example, in your first post, you write **I’ve found 6 major issues with the ACGME Pathology Milestones**, which is written with a `<b>` tag, which is not to spec. For emphasis, use `<em>`, which will format the same clause as *I’ve found 6 major issues with the ACGME Pathology Milestones*. This will help with future theming and the portability of your posts. Plus, it reflects web standards, which you'll just have to trust me are *extremely* important. See what I did there with the emphasis? I'm so meta!
  * HTML5 Doctor offers a good [primer][] on semantics for non-developers and non-technical users.

### Editorial and Content Strategy

Of course, I have no idea if you've already done this:

* Before you start developing too much content, an [editorial mission statement][]. This includes defining your audiences, outward paths, yada, yada, yada.
* Use a consistent style guide. I am talking about editorial, not visual, style. If you want a quick copy edit, please feel free to send me any posts. I can make sure the style consistently observes CSE, AMA 10, CMS, MLA, AP, etc. AMA 10 would make the most sense if you're planning on publishing clinical data or article content similar to that found in scholarly journals.
* My guess is that you already have other posts in the hopper. Consistent publishing and scheduling will help build a regular user base (ie, readership) and keep them coming back. A CMS like WordPress makes this a nonissue.
* Go niche with your content. I think you are already, but specialized, long-form articles reflect Google's SEO recommendations for content.

## Analytics, other...

* It might be overkill, but have you considered creating a Facebook page or Google+ for the site once you have more content?
* I don't see the Google Analytics script running on your site. I would strongly recommend adding analytics for a more comprehensive idea of your user's behavior and to gauge opportunities for improving user experience. It's also easier to do content grouping now as you create articles rather than waiting until you've amassed a large number of articles and move backwards.


[about $11]: https://www.namecheap.com/domains/registration/results.aspx?domain=onpathology
[$11]: https://www.namecheap.com/domains/registration/results.aspx?domain=richeypathology
[62/100]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fdoctorrichey.wordpress.com%2F
[compressor.io]: https://compressor.io/
[Disqus]: https://disqus.com/admin/wordpress/
[editorial mission statement]: http://contentmarketinginstitute.com/2015/10/statement-content-marketing/
[FB dev tester]: https://developers.facebook.com/tools/debug/sharing/?q=https%3A%2F%2Fdoctorrichey.wordpress.com%2F
[Google's new mobile tool]: https://search.google.com/search-console/mobile-friendly?utm_source=psi&utm_medium=link&utm_campaign=psi-ux-banner&hl=en-US&id=VIKLkTfCP-J5s0nJ95eusQ
[markdown]: http://www.markdowntutorial.com/
[Moz]: https://moz.com/community/q/blog-article-url-with-or-without-date
[Open Graph Protocol]: http://ogp.me/
[Social Welfare]: http://www.bloggingwizard.com/go/social-warfare/
[Twitter card validator]: https://cards-dev.twitter.com/validator
[URL structure]: https://www.searchenginenews.com/sample/content/should-i-remove-the-dates-in-my-blog-urls-yes