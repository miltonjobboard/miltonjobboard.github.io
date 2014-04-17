miltonjobboard.github.io
========================

Milton jobs board

Adding a new advertisement
	1) Copy lines below. Everything that needs to be edited are in square brackets [].
	2) Paste these lines after the last advertisement. There is a comment that says "place here." Paste before this line.
	3) A template for the new advertisement has been created. 
	4) In the fourth line of code, change the background image name (It should still be saved in the media folder). 
	5) Also change the data-target to the next Modal. Only the number should be changed so that each advertisement has a unique id.
	6) In line 7, insert the company name that will be present on the bottom of the button.
	7) In line 14, change the Modal Number so it matches the one used in step 5.
	8) In line 19, change the Modal Header. This is what you want to show up at the top of the popup.
	9) In line 23, add a description of the the job.
	10) In line 26, the list of requirements start. Type out the requirement in between <li> and </li>. To add a new requirement copy the tags and paste it in a new line directly after the existing requirement.
	11) In line 29, add a description of how to apply for the job or opportunity.
	12) Starting in line 31, add the contact information. If there is more that needs to be added, create a </br> tag on the next line and enter the information.
	13) For contact information, there is a template that should work for websites. Add the url where it says url (you will need to include http://www.) for it to work. Add what you want users to see as the link where it says "website" before "</a>"
	14) After all of these steps, you should be finished with creating a new listing!
	
	
	<div class="col-lg-4 col-md-4 col-sm-4" style="display: block;">
			<div class="panel" style="display: block;" >		
					<div align=center class="buttons" style="display: block;"> 
						<a class="btn btn-lg btn-default job-button" style = "background-image: url('media/[BackgroundImage]');" data-toggle="modal" data-target="#Modal[ModalNumber]" ><!--Background Image and Modal Id-->
						<div >
							<h4 class = "btn-text" style="position:relative; top: 190px;">
								[Company Name]
							</h4>
						</div>
						</a>						
						<br>
					</div>
			</div>	
			<div class="modal fade" id="Modal[ModalNumber]" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><!--Change Modal ID-->
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							<h2 class="modal-title" id="myModalLabel">[ModalHeader]</h2><!--Popup Header-->
						</div>
						<div class="modal-body">
							<h3>Description</h3><!--Description-->
								<p> [Description of Job/Opportunity]</p>
							<h3>Requirements</h3><!--Requirements-->
							<ul>
								<li>[Requirement1]</li>
							</ul>
							<h3>How to Apply</h3><!--Apply-->
								<p>[How to Apply]</p>
							<h3>Contact</h3><!--Contact-->
									<p>[Comapany Name]
									</br>Phone: 
									</br>Address: 
									</br>Website: <a href="[website url]" target="_blank">[website]</a>
								</p>						
						</div>
						<div class="modal-footer">
							<button type="button" align = center class="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>	
		</div>
