import React from 'react'

import './footer.css'

const Footer = () => 
<div>
    <footer class="footer">
        <div class="copy-right_text">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-12">
                        <p class="copy_right text-center"> 
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved LTW Team <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

export default Footer