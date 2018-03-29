/* BASIC GIT STEPS /////////////
Create the remote repository, and get the URL such as git@github.com:/youruser/somename.git or https://github.com/youruser/somename.git

1. If your local GIT repo is already set up, skips steps 2 and 3

2. Locally, at the root directory of your source, git init

	2a. If you initialize the repo with a .gitignore and a README.md you should do a git pull {url from step 1} to ensure you don't commit files to source that you want to ignore ;)

3. Locally, add and commit what you want in your initial repo (for everything, git add . then git commit -m 'initial commit comment')

4. to attach your remote repo with the name 'origin' (like cloning would do)
git remote add origin [URL From Step 1]

5.Execute git pull origin master to pull the remote branch so that they are in sync.
to push up your master branch (change master to something else for a different branch):
git push origin master*/


//toggle function same class
$(document).ready(function () {
    $('.to-hide-element').hide();
    $('.button-to-toggle').click(function () {
        $(this).parent().next().slideToggle(200);
    });
    $('.to-hide-element').slideUp(200);
});

// even heights function for wordpress

jQuery(function($) {
	
	
	function evenHeight(parent, minSize){
		if(minSize === undefined) { minSize = 768; }
		
		var Height = 0;	
		$(parent).children().each(function(){
			$(parent).children().css('min-height', Height);
			$(this).addClass('auto-height');
			if($(this).outerHeight() > Height){
				Height = $(this).outerHeight();
			}
		});
		if(screen.width > minSize){
			$(parent).children().css('min-height', Height);
		}
	}
	
	$(window).load(function(){
		evenHeight('.gdlr-core-blog-item-holder');
	});
	
	$(window).resize(function(){
		evenHeight('.gdlr-core-blog-item-holder');
	});
	
	
});