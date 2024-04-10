export default function Admin(){
    return<>
    <section>
    <div className="box box-info">
                <div className="box-header">
                  <i className="fa fa-envelope"></i>
                  <h3 className="box-title">Quick Email</h3>
          
                  <div className="pull-right box-tools">
                    <button className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body">
                  <form action="#" method="post">
                    <div className="form-group">
                      <input type="email" className="form-control" name="emailto" placeholder="Email to:"/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" placeholder="Subject"/>
                    </div>
                    <div>
                      <textarea className="textarea" placeholder="Message" style="width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
                    </div>
                  </form>
                </div>
                <div className="box-footer clearfix">
                  <button className="pull-right btn btn-default" id="sendEmail">Send <i className="fa fa-arrow-circle-right"></i></button>
                </div>
              </div>

            </section>
        
            <section className="col-lg-5 connectedSortable">

             
              <div className="box box-solid bg-light-blue-gradient">
                <div className="box-header">
                  
                  <div className="pull-right box-tools">
                    <button className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range"><i className="fa fa-calendar"></i></button>
                    <button className="btn btn-primary btn-sm pull-right" data-widget='collapse' data-toggle="tooltip" title="Collapse" style="margin-right: 5px;"><i className="fa fa-minus"></i></button>
                  </div>

                  <i className="fa fa-map-marker"></i>
                  <h3 className="box-title">
                    Visitors
                  </h3>
                </div>
                <div className="box-body">
                  <div id="world-map" style="height: 250px; width: 100%;"></div>
                </div>
                <div className="box-footer no-border">
                  <div className="row">
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <div id="sparkline-1"></div>
                      <div className="knob-label">Visitors</div>
                    </div>
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <div id="sparkline-2"></div>
                      <div className="knob-label">Online</div>
                    </div>
                    <div className="col-xs-4 text-center">
                      <div id="sparkline-3"></div>
                      <div className="knob-label">Exists</div>
                    </div>
                  </div>
                </div>
              </div>
              </section>
              <div className="box box-primary">
                <div className="box-header">
                  <i className="ion ion-clipboard"></i>
                  <h3 className="box-title">To Do List</h3>
                  <div className="box-tools pull-right">
                    <ul className="pagination pagination-sm inline">
                      <li><a href="#">&laquo;</a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <div className="box-body">
                  <ul className="todo-list">
                    <li>
                  
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                    
                      <input type="checkbox" value="" name=""/>
                   
                      <span className="text">Design a nice theme</span>
                   
                      <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>
                    
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Make the theme responsive</span>
                      <small className="label label-info"><i className="fa fa-clock-o"></i> 4 hours</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-warning"><i className="fa fa-clock-o"></i> 1 day</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-success"><i className="fa fa-clock-o"></i> 3 days</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Check your messages and notifications</span>
                      <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 week</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fa fa-ellipsis-v"></i>
                        <i className="fa fa-ellipsis-v"></i>
                      </span>
                      <input type="checkbox" value="" name=""/>
                      <span className="text">Let theme shine like a star</span>
                      <small className="label label-default"><i className="fa fa-clock-o"></i> 1 month</small>
                      <div className="tools">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash-o"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-footer clearfix no-border">
                  <button className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
                </div>
              </div>

             
            
           

             
              <div className="box box-solid bg-teal-gradient">
                <div className="box-header">
                  <i className="fa fa-th"></i>
                  <h3 className="box-title">Sales Graph</h3>
                  <div className="box-tools pull-right">
                    <button className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    <button className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times"></i></button>
                  </div>
                </div>
                <div className="box-body border-radius-none">
                  <div className="chart" id="line-chart" style="height: 250px;"></div>
                </div>
                <div className="box-footer no-border">
                  <div className="row">
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <input type="text" className="knob" data-readonly="true" value="20" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">Mail-Orders</div>
                    </div>
                    <div className="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">
                      <input type="text" className="knob" data-readonly="true" value="50" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">Online</div>
                    </div>
                    <div className="col-xs-4 text-center">
                      <input type="text" className="knob" data-readonly="true" value="30" data-width="60" data-height="60" data-fgColor="#39CCCC"/>
                      <div className="knob-label">In-Store</div>
                    </div>
                  </div>
                </div>
              </div>

              </>
   
}
