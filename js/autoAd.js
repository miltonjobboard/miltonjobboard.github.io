

function createAd()
{
		
		var numAds= 7;
		document.write('<center> <font size=2 face=verdana> Page created by: ');
		for (i=0; i<numAds; i++)
		{
			var modalNumber=i;
			var backgroundImage=
			var company=
			var jobTitle=
			var description=
			var requirements=
			var apply=
			var phone=
			var email=
			var website=
			
		
			document.write(
			
				'<div class="col-lg-4 col-md-4 col-sm-4" style="display: block;">
					<div class="panel" style="display: block;" >		
							<div align=center class="buttons" style="display: block;"> 
								<a class="btn btn-lg btn-default job-button" style = "background-image: url(''+backgroundImage+'');" data-toggle="modal" data-target="#Modal'+modalNumber'+" >
								<div >
									<h4 class = "btn-text" style="position:relative; top: 190px;">
										'+company+'
									</h4>
								</div>
								</a>						
								<br>
							</div>
					</div>	
					<div class="modal fade" id="Modal+modalNumber+" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><!--Change Modal ID-->
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
									<h2 class="modal-title" id="myModalLabel">'+jobTitle+'</h2>
								</div>
								<div class="modal-body">
									<h3>Description</h3><
										<p> '+description+'</p>
									<h3>Requirements</h3>
									'+requirements+'
									<h3>How to Apply</h3>
										<p>'+apply+'</p>
									<h3>Contact</h3>
											<p>'+company+'
											</br>Phone: '+phone+'
											</br>Address: '+address+'
											</br>Website: <a href="'+website+'" target="_blank">Website</a>
										</p>						
								</div>
								<div class="modal-footer">
									<button type="button" align = center class="btn btn-default" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>'
				)
			}
		}
