miltonjobboard.github.io
========================

Milton jobs board

Adding a new advertisement
	1) Copy lines below. Everything that needs to be edited are in square brackets [].
	2) Paste these lines after the last advertisement. There is a comment that says "place here." Paste before this line.
	3) A template for the new advertisement has been created. 
	4) In the fourth line of code, change the background image name (It should still be saved in the media folder). 
	5) Also change the data-target to the next Modal. All that needs to be changed to 
	
	
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
								<li>[Requirement2]</li>
								
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
