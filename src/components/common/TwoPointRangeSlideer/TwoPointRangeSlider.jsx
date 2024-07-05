import React from 'react'

function TwoPointRangeSlider() {
    return (

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="slider-range"></div>
                </div>
            </div>
            <div class="row slider-labels">
                <div class="col-xs-6 caption">
                    <strong>Min:</strong> <span id="slider-range-value1"></span>
                </div>
                <div class="col-xs-6 text-right caption">
                    <strong>Max:</strong> <span id="slider-range-value2"></span>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <form>
                        <input type="hidden" name="min-value" value="">
                        <input type="hidden" name="max-value" value="">
                    </form>
                </div>
            </div>
        </div>
            )
}

            export default TwoPointRangeSlider