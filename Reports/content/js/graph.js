/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 562.0, "minX": 0.0, "maxY": 11275.0, "series": [{"data": [[0.0, 562.0], [0.1, 564.0], [0.2, 565.0], [0.3, 567.0], [0.4, 568.0], [0.5, 568.0], [0.6, 569.0], [0.7, 570.0], [0.8, 570.0], [0.9, 571.0], [1.0, 571.0], [1.1, 571.0], [1.2, 571.0], [1.3, 572.0], [1.4, 572.0], [1.5, 573.0], [1.6, 573.0], [1.7, 573.0], [1.8, 573.0], [1.9, 574.0], [2.0, 574.0], [2.1, 574.0], [2.2, 575.0], [2.3, 575.0], [2.4, 575.0], [2.5, 575.0], [2.6, 575.0], [2.7, 575.0], [2.8, 575.0], [2.9, 576.0], [3.0, 576.0], [3.1, 576.0], [3.2, 576.0], [3.3, 576.0], [3.4, 576.0], [3.5, 577.0], [3.6, 577.0], [3.7, 577.0], [3.8, 577.0], [3.9, 577.0], [4.0, 577.0], [4.1, 578.0], [4.2, 578.0], [4.3, 578.0], [4.4, 578.0], [4.5, 578.0], [4.6, 578.0], [4.7, 579.0], [4.8, 579.0], [4.9, 579.0], [5.0, 579.0], [5.1, 579.0], [5.2, 579.0], [5.3, 579.0], [5.4, 579.0], [5.5, 579.0], [5.6, 580.0], [5.7, 580.0], [5.8, 580.0], [5.9, 580.0], [6.0, 580.0], [6.1, 580.0], [6.2, 580.0], [6.3, 580.0], [6.4, 580.0], [6.5, 580.0], [6.6, 580.0], [6.7, 581.0], [6.8, 581.0], [6.9, 581.0], [7.0, 581.0], [7.1, 581.0], [7.2, 581.0], [7.3, 581.0], [7.4, 581.0], [7.5, 581.0], [7.6, 581.0], [7.7, 581.0], [7.8, 581.0], [7.9, 582.0], [8.0, 582.0], [8.1, 582.0], [8.2, 582.0], [8.3, 582.0], [8.4, 582.0], [8.5, 582.0], [8.6, 582.0], [8.7, 582.0], [8.8, 582.0], [8.9, 583.0], [9.0, 583.0], [9.1, 583.0], [9.2, 583.0], [9.3, 583.0], [9.4, 583.0], [9.5, 583.0], [9.6, 583.0], [9.7, 583.0], [9.8, 583.0], [9.9, 583.0], [10.0, 583.0], [10.1, 583.0], [10.2, 584.0], [10.3, 584.0], [10.4, 584.0], [10.5, 584.0], [10.6, 584.0], [10.7, 584.0], [10.8, 584.0], [10.9, 584.0], [11.0, 584.0], [11.1, 584.0], [11.2, 584.0], [11.3, 584.0], [11.4, 585.0], [11.5, 585.0], [11.6, 585.0], [11.7, 585.0], [11.8, 585.0], [11.9, 585.0], [12.0, 585.0], [12.1, 585.0], [12.2, 585.0], [12.3, 585.0], [12.4, 585.0], [12.5, 585.0], [12.6, 585.0], [12.7, 585.0], [12.8, 586.0], [12.9, 586.0], [13.0, 586.0], [13.1, 586.0], [13.2, 586.0], [13.3, 586.0], [13.4, 586.0], [13.5, 586.0], [13.6, 586.0], [13.7, 586.0], [13.8, 586.0], [13.9, 586.0], [14.0, 586.0], [14.1, 586.0], [14.2, 587.0], [14.3, 587.0], [14.4, 587.0], [14.5, 587.0], [14.6, 587.0], [14.7, 587.0], [14.8, 587.0], [14.9, 587.0], [15.0, 587.0], [15.1, 587.0], [15.2, 587.0], [15.3, 588.0], [15.4, 588.0], [15.5, 588.0], [15.6, 588.0], [15.7, 588.0], [15.8, 588.0], [15.9, 588.0], [16.0, 588.0], [16.1, 588.0], [16.2, 588.0], [16.3, 588.0], [16.4, 588.0], [16.5, 588.0], [16.6, 589.0], [16.7, 589.0], [16.8, 589.0], [16.9, 589.0], [17.0, 589.0], [17.1, 589.0], [17.2, 589.0], [17.3, 589.0], [17.4, 589.0], [17.5, 589.0], [17.6, 589.0], [17.7, 589.0], [17.8, 590.0], [17.9, 590.0], [18.0, 590.0], [18.1, 590.0], [18.2, 590.0], [18.3, 590.0], [18.4, 590.0], [18.5, 590.0], [18.6, 590.0], [18.7, 590.0], [18.8, 590.0], [18.9, 590.0], [19.0, 590.0], [19.1, 590.0], [19.2, 591.0], [19.3, 591.0], [19.4, 591.0], [19.5, 591.0], [19.6, 591.0], [19.7, 591.0], [19.8, 591.0], [19.9, 591.0], [20.0, 591.0], [20.1, 591.0], [20.2, 591.0], [20.3, 591.0], [20.4, 592.0], [20.5, 592.0], [20.6, 592.0], [20.7, 592.0], [20.8, 592.0], [20.9, 592.0], [21.0, 592.0], [21.1, 592.0], [21.2, 592.0], [21.3, 593.0], [21.4, 593.0], [21.5, 593.0], [21.6, 593.0], [21.7, 593.0], [21.8, 593.0], [21.9, 593.0], [22.0, 593.0], [22.1, 593.0], [22.2, 593.0], [22.3, 593.0], [22.4, 593.0], [22.5, 593.0], [22.6, 594.0], [22.7, 594.0], [22.8, 594.0], [22.9, 594.0], [23.0, 594.0], [23.1, 594.0], [23.2, 594.0], [23.3, 594.0], [23.4, 594.0], [23.5, 594.0], [23.6, 594.0], [23.7, 594.0], [23.8, 594.0], [23.9, 594.0], [24.0, 595.0], [24.1, 595.0], [24.2, 595.0], [24.3, 595.0], [24.4, 595.0], [24.5, 595.0], [24.6, 595.0], [24.7, 595.0], [24.8, 595.0], [24.9, 595.0], [25.0, 595.0], [25.1, 595.0], [25.2, 595.0], [25.3, 596.0], [25.4, 596.0], [25.5, 596.0], [25.6, 596.0], [25.7, 596.0], [25.8, 596.0], [25.9, 596.0], [26.0, 596.0], [26.1, 596.0], [26.2, 596.0], [26.3, 596.0], [26.4, 596.0], [26.5, 596.0], [26.6, 596.0], [26.7, 597.0], [26.8, 597.0], [26.9, 597.0], [27.0, 597.0], [27.1, 597.0], [27.2, 597.0], [27.3, 597.0], [27.4, 597.0], [27.5, 597.0], [27.6, 597.0], [27.7, 597.0], [27.8, 598.0], [27.9, 598.0], [28.0, 598.0], [28.1, 598.0], [28.2, 598.0], [28.3, 598.0], [28.4, 598.0], [28.5, 598.0], [28.6, 598.0], [28.7, 598.0], [28.8, 599.0], [28.9, 599.0], [29.0, 599.0], [29.1, 599.0], [29.2, 599.0], [29.3, 599.0], [29.4, 599.0], [29.5, 599.0], [29.6, 599.0], [29.7, 600.0], [29.8, 600.0], [29.9, 600.0], [30.0, 600.0], [30.1, 600.0], [30.2, 600.0], [30.3, 600.0], [30.4, 600.0], [30.5, 600.0], [30.6, 601.0], [30.7, 601.0], [30.8, 601.0], [30.9, 601.0], [31.0, 601.0], [31.1, 601.0], [31.2, 601.0], [31.3, 601.0], [31.4, 601.0], [31.5, 601.0], [31.6, 602.0], [31.7, 602.0], [31.8, 602.0], [31.9, 602.0], [32.0, 602.0], [32.1, 602.0], [32.2, 602.0], [32.3, 602.0], [32.4, 602.0], [32.5, 602.0], [32.6, 602.0], [32.7, 602.0], [32.8, 602.0], [32.9, 603.0], [33.0, 603.0], [33.1, 603.0], [33.2, 603.0], [33.3, 603.0], [33.4, 603.0], [33.5, 603.0], [33.6, 603.0], [33.7, 603.0], [33.8, 603.0], [33.9, 603.0], [34.0, 604.0], [34.1, 604.0], [34.2, 604.0], [34.3, 604.0], [34.4, 604.0], [34.5, 604.0], [34.6, 604.0], [34.7, 604.0], [34.8, 604.0], [34.9, 604.0], [35.0, 604.0], [35.1, 604.0], [35.2, 605.0], [35.3, 605.0], [35.4, 605.0], [35.5, 605.0], [35.6, 605.0], [35.7, 605.0], [35.8, 605.0], [35.9, 606.0], [36.0, 606.0], [36.1, 606.0], [36.2, 606.0], [36.3, 606.0], [36.4, 606.0], [36.5, 606.0], [36.6, 606.0], [36.7, 606.0], [36.8, 606.0], [36.9, 607.0], [37.0, 607.0], [37.1, 607.0], [37.2, 607.0], [37.3, 607.0], [37.4, 607.0], [37.5, 607.0], [37.6, 608.0], [37.7, 608.0], [37.8, 608.0], [37.9, 608.0], [38.0, 608.0], [38.1, 608.0], [38.2, 608.0], [38.3, 608.0], [38.4, 608.0], [38.5, 608.0], [38.6, 609.0], [38.7, 609.0], [38.8, 609.0], [38.9, 609.0], [39.0, 609.0], [39.1, 610.0], [39.2, 610.0], [39.3, 610.0], [39.4, 610.0], [39.5, 610.0], [39.6, 610.0], [39.7, 611.0], [39.8, 611.0], [39.9, 611.0], [40.0, 611.0], [40.1, 611.0], [40.2, 611.0], [40.3, 611.0], [40.4, 611.0], [40.5, 611.0], [40.6, 611.0], [40.7, 611.0], [40.8, 612.0], [40.9, 612.0], [41.0, 612.0], [41.1, 612.0], [41.2, 612.0], [41.3, 612.0], [41.4, 612.0], [41.5, 613.0], [41.6, 613.0], [41.7, 613.0], [41.8, 613.0], [41.9, 613.0], [42.0, 613.0], [42.1, 614.0], [42.2, 614.0], [42.3, 614.0], [42.4, 614.0], [42.5, 614.0], [42.6, 614.0], [42.7, 614.0], [42.8, 615.0], [42.9, 615.0], [43.0, 615.0], [43.1, 615.0], [43.2, 615.0], [43.3, 615.0], [43.4, 616.0], [43.5, 616.0], [43.6, 616.0], [43.7, 616.0], [43.8, 616.0], [43.9, 616.0], [44.0, 616.0], [44.1, 616.0], [44.2, 617.0], [44.3, 617.0], [44.4, 617.0], [44.5, 617.0], [44.6, 617.0], [44.7, 617.0], [44.8, 618.0], [44.9, 618.0], [45.0, 618.0], [45.1, 618.0], [45.2, 618.0], [45.3, 618.0], [45.4, 618.0], [45.5, 619.0], [45.6, 619.0], [45.7, 619.0], [45.8, 619.0], [45.9, 619.0], [46.0, 619.0], [46.1, 620.0], [46.2, 620.0], [46.3, 621.0], [46.4, 621.0], [46.5, 621.0], [46.6, 621.0], [46.7, 621.0], [46.8, 622.0], [46.9, 622.0], [47.0, 622.0], [47.1, 622.0], [47.2, 622.0], [47.3, 622.0], [47.4, 622.0], [47.5, 623.0], [47.6, 623.0], [47.7, 623.0], [47.8, 623.0], [47.9, 623.0], [48.0, 623.0], [48.1, 624.0], [48.2, 624.0], [48.3, 624.0], [48.4, 624.0], [48.5, 624.0], [48.6, 625.0], [48.7, 625.0], [48.8, 626.0], [48.9, 626.0], [49.0, 626.0], [49.1, 626.0], [49.2, 626.0], [49.3, 626.0], [49.4, 626.0], [49.5, 627.0], [49.6, 628.0], [49.7, 628.0], [49.8, 628.0], [49.9, 628.0], [50.0, 629.0], [50.1, 629.0], [50.2, 629.0], [50.3, 629.0], [50.4, 630.0], [50.5, 630.0], [50.6, 630.0], [50.7, 630.0], [50.8, 631.0], [50.9, 631.0], [51.0, 631.0], [51.1, 632.0], [51.2, 632.0], [51.3, 632.0], [51.4, 633.0], [51.5, 633.0], [51.6, 633.0], [51.7, 633.0], [51.8, 634.0], [51.9, 634.0], [52.0, 635.0], [52.1, 635.0], [52.2, 635.0], [52.3, 635.0], [52.4, 635.0], [52.5, 635.0], [52.6, 635.0], [52.7, 636.0], [52.8, 636.0], [52.9, 636.0], [53.0, 637.0], [53.1, 637.0], [53.2, 637.0], [53.3, 638.0], [53.4, 638.0], [53.5, 639.0], [53.6, 639.0], [53.7, 639.0], [53.8, 639.0], [53.9, 639.0], [54.0, 640.0], [54.1, 640.0], [54.2, 641.0], [54.3, 641.0], [54.4, 643.0], [54.5, 643.0], [54.6, 643.0], [54.7, 643.0], [54.8, 644.0], [54.9, 644.0], [55.0, 644.0], [55.1, 645.0], [55.2, 645.0], [55.3, 646.0], [55.4, 647.0], [55.5, 647.0], [55.6, 648.0], [55.7, 648.0], [55.8, 648.0], [55.9, 648.0], [56.0, 649.0], [56.1, 649.0], [56.2, 649.0], [56.3, 650.0], [56.4, 650.0], [56.5, 651.0], [56.6, 651.0], [56.7, 651.0], [56.8, 653.0], [56.9, 653.0], [57.0, 653.0], [57.1, 654.0], [57.2, 654.0], [57.3, 654.0], [57.4, 655.0], [57.5, 655.0], [57.6, 655.0], [57.7, 655.0], [57.8, 656.0], [57.9, 656.0], [58.0, 656.0], [58.1, 656.0], [58.2, 657.0], [58.3, 657.0], [58.4, 658.0], [58.5, 659.0], [58.6, 659.0], [58.7, 660.0], [58.8, 660.0], [58.9, 660.0], [59.0, 661.0], [59.1, 662.0], [59.2, 663.0], [59.3, 663.0], [59.4, 663.0], [59.5, 664.0], [59.6, 664.0], [59.7, 664.0], [59.8, 665.0], [59.9, 665.0], [60.0, 666.0], [60.1, 667.0], [60.2, 668.0], [60.3, 669.0], [60.4, 669.0], [60.5, 670.0], [60.6, 670.0], [60.7, 671.0], [60.8, 671.0], [60.9, 672.0], [61.0, 672.0], [61.1, 673.0], [61.2, 673.0], [61.3, 674.0], [61.4, 675.0], [61.5, 675.0], [61.6, 675.0], [61.7, 676.0], [61.8, 677.0], [61.9, 678.0], [62.0, 678.0], [62.1, 678.0], [62.2, 678.0], [62.3, 679.0], [62.4, 680.0], [62.5, 681.0], [62.6, 682.0], [62.7, 682.0], [62.8, 682.0], [62.9, 682.0], [63.0, 683.0], [63.1, 683.0], [63.2, 684.0], [63.3, 685.0], [63.4, 685.0], [63.5, 686.0], [63.6, 687.0], [63.7, 687.0], [63.8, 688.0], [63.9, 689.0], [64.0, 690.0], [64.1, 690.0], [64.2, 691.0], [64.3, 692.0], [64.4, 693.0], [64.5, 693.0], [64.6, 693.0], [64.7, 694.0], [64.8, 695.0], [64.9, 695.0], [65.0, 696.0], [65.1, 697.0], [65.2, 698.0], [65.3, 698.0], [65.4, 698.0], [65.5, 699.0], [65.6, 701.0], [65.7, 701.0], [65.8, 702.0], [65.9, 703.0], [66.0, 704.0], [66.1, 704.0], [66.2, 705.0], [66.3, 706.0], [66.4, 706.0], [66.5, 707.0], [66.6, 707.0], [66.7, 708.0], [66.8, 708.0], [66.9, 708.0], [67.0, 709.0], [67.1, 709.0], [67.2, 709.0], [67.3, 710.0], [67.4, 711.0], [67.5, 711.0], [67.6, 711.0], [67.7, 713.0], [67.8, 713.0], [67.9, 714.0], [68.0, 715.0], [68.1, 715.0], [68.2, 717.0], [68.3, 717.0], [68.4, 717.0], [68.5, 718.0], [68.6, 719.0], [68.7, 721.0], [68.8, 722.0], [68.9, 722.0], [69.0, 724.0], [69.1, 724.0], [69.2, 724.0], [69.3, 725.0], [69.4, 725.0], [69.5, 725.0], [69.6, 727.0], [69.7, 727.0], [69.8, 728.0], [69.9, 728.0], [70.0, 729.0], [70.1, 730.0], [70.2, 732.0], [70.3, 732.0], [70.4, 733.0], [70.5, 735.0], [70.6, 735.0], [70.7, 736.0], [70.8, 737.0], [70.9, 737.0], [71.0, 738.0], [71.1, 739.0], [71.2, 739.0], [71.3, 740.0], [71.4, 742.0], [71.5, 743.0], [71.6, 743.0], [71.7, 744.0], [71.8, 745.0], [71.9, 746.0], [72.0, 747.0], [72.1, 747.0], [72.2, 748.0], [72.3, 750.0], [72.4, 750.0], [72.5, 752.0], [72.6, 753.0], [72.7, 754.0], [72.8, 754.0], [72.9, 756.0], [73.0, 757.0], [73.1, 759.0], [73.2, 760.0], [73.3, 761.0], [73.4, 762.0], [73.5, 763.0], [73.6, 763.0], [73.7, 764.0], [73.8, 766.0], [73.9, 766.0], [74.0, 767.0], [74.1, 768.0], [74.2, 769.0], [74.3, 770.0], [74.4, 771.0], [74.5, 773.0], [74.6, 773.0], [74.7, 775.0], [74.8, 777.0], [74.9, 779.0], [75.0, 780.0], [75.1, 781.0], [75.2, 783.0], [75.3, 783.0], [75.4, 785.0], [75.5, 788.0], [75.6, 788.0], [75.7, 789.0], [75.8, 790.0], [75.9, 792.0], [76.0, 794.0], [76.1, 795.0], [76.2, 797.0], [76.3, 797.0], [76.4, 798.0], [76.5, 800.0], [76.6, 800.0], [76.7, 801.0], [76.8, 802.0], [76.9, 805.0], [77.0, 806.0], [77.1, 808.0], [77.2, 809.0], [77.3, 811.0], [77.4, 812.0], [77.5, 814.0], [77.6, 814.0], [77.7, 815.0], [77.8, 817.0], [77.9, 822.0], [78.0, 825.0], [78.1, 825.0], [78.2, 826.0], [78.3, 826.0], [78.4, 827.0], [78.5, 830.0], [78.6, 832.0], [78.7, 833.0], [78.8, 835.0], [78.9, 837.0], [79.0, 839.0], [79.1, 840.0], [79.2, 842.0], [79.3, 844.0], [79.4, 845.0], [79.5, 848.0], [79.6, 849.0], [79.7, 850.0], [79.8, 850.0], [79.9, 852.0], [80.0, 853.0], [80.1, 856.0], [80.2, 858.0], [80.3, 862.0], [80.4, 864.0], [80.5, 867.0], [80.6, 872.0], [80.7, 874.0], [80.8, 876.0], [80.9, 878.0], [81.0, 879.0], [81.1, 881.0], [81.2, 883.0], [81.3, 887.0], [81.4, 888.0], [81.5, 891.0], [81.6, 893.0], [81.7, 894.0], [81.8, 898.0], [81.9, 900.0], [82.0, 902.0], [82.1, 907.0], [82.2, 911.0], [82.3, 911.0], [82.4, 913.0], [82.5, 914.0], [82.6, 920.0], [82.7, 924.0], [82.8, 926.0], [82.9, 934.0], [83.0, 938.0], [83.1, 943.0], [83.2, 944.0], [83.3, 949.0], [83.4, 957.0], [83.5, 963.0], [83.6, 969.0], [83.7, 975.0], [83.8, 978.0], [83.9, 985.0], [84.0, 986.0], [84.1, 998.0], [84.2, 1002.0], [84.3, 1016.0], [84.4, 1019.0], [84.5, 1023.0], [84.6, 1025.0], [84.7, 1030.0], [84.8, 1037.0], [84.9, 1041.0], [85.0, 1044.0], [85.1, 1048.0], [85.2, 1050.0], [85.3, 1063.0], [85.4, 1065.0], [85.5, 1069.0], [85.6, 1071.0], [85.7, 1083.0], [85.8, 1084.0], [85.9, 1094.0], [86.0, 1102.0], [86.1, 1115.0], [86.2, 1117.0], [86.3, 1132.0], [86.4, 1139.0], [86.5, 1149.0], [86.6, 1161.0], [86.7, 1168.0], [86.8, 1170.0], [86.9, 1176.0], [87.0, 1180.0], [87.1, 1193.0], [87.2, 1206.0], [87.3, 1223.0], [87.4, 1225.0], [87.5, 1233.0], [87.6, 1241.0], [87.7, 1248.0], [87.8, 1249.0], [87.9, 1264.0], [88.0, 1269.0], [88.1, 1301.0], [88.2, 1303.0], [88.3, 1311.0], [88.4, 1324.0], [88.5, 1335.0], [88.6, 1355.0], [88.7, 1365.0], [88.8, 1370.0], [88.9, 1398.0], [89.0, 1409.0], [89.1, 1428.0], [89.2, 1438.0], [89.3, 1452.0], [89.4, 1461.0], [89.5, 1481.0], [89.6, 1500.0], [89.7, 1538.0], [89.8, 1549.0], [89.9, 1562.0], [90.0, 1570.0], [90.1, 1591.0], [90.2, 1602.0], [90.3, 1606.0], [90.4, 1615.0], [90.5, 1645.0], [90.6, 1679.0], [90.7, 1700.0], [90.8, 1711.0], [90.9, 1744.0], [91.0, 1770.0], [91.1, 1789.0], [91.2, 1801.0], [91.3, 1810.0], [91.4, 1824.0], [91.5, 1852.0], [91.6, 1891.0], [91.7, 1904.0], [91.8, 1919.0], [91.9, 1936.0], [92.0, 1939.0], [92.1, 1966.0], [92.2, 1996.0], [92.3, 2041.0], [92.4, 2043.0], [92.5, 2058.0], [92.6, 2086.0], [92.7, 2101.0], [92.8, 2121.0], [92.9, 2142.0], [93.0, 2151.0], [93.1, 2210.0], [93.2, 2236.0], [93.3, 2240.0], [93.4, 2280.0], [93.5, 2308.0], [93.6, 2331.0], [93.7, 2364.0], [93.8, 2380.0], [93.9, 2409.0], [94.0, 2448.0], [94.1, 2481.0], [94.2, 2494.0], [94.3, 2546.0], [94.4, 2635.0], [94.5, 2714.0], [94.6, 2741.0], [94.7, 2821.0], [94.8, 2911.0], [94.9, 2946.0], [95.0, 2995.0], [95.1, 3039.0], [95.2, 3041.0], [95.3, 3115.0], [95.4, 3130.0], [95.5, 3238.0], [95.6, 3281.0], [95.7, 3311.0], [95.8, 3315.0], [95.9, 3448.0], [96.0, 3479.0], [96.1, 3508.0], [96.2, 3562.0], [96.3, 3618.0], [96.4, 3644.0], [96.5, 3717.0], [96.6, 3749.0], [96.7, 3842.0], [96.8, 3884.0], [96.9, 3911.0], [97.0, 3967.0], [97.1, 4076.0], [97.2, 4202.0], [97.3, 4356.0], [97.4, 4377.0], [97.5, 4538.0], [97.6, 4613.0], [97.7, 4775.0], [97.8, 4811.0], [97.9, 5086.0], [98.0, 5244.0], [98.1, 5439.0], [98.2, 5497.0], [98.3, 5738.0], [98.4, 5808.0], [98.5, 6014.0], [98.6, 6077.0], [98.7, 6363.0], [98.8, 6996.0], [98.9, 7237.0], [99.0, 7269.0], [99.1, 7756.0], [99.2, 8298.0], [99.3, 9186.0], [99.4, 9377.0], [99.5, 9964.0], [99.6, 10161.0], [99.7, 10345.0], [99.8, 10617.0], [99.9, 10718.0], [100.0, 11275.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 896.0, "series": [{"data": [[600.0, 896.0], [700.0, 274.0], [800.0, 135.0], [900.0, 57.0], [1000.0, 45.0], [1100.0, 30.0], [1200.0, 23.0], [1300.0, 21.0], [1400.0, 16.0], [1500.0, 15.0], [1600.0, 13.0], [1700.0, 12.0], [1800.0, 13.0], [1900.0, 13.0], [2000.0, 12.0], [2100.0, 10.0], [2300.0, 10.0], [2200.0, 9.0], [2400.0, 10.0], [2500.0, 3.0], [2600.0, 3.0], [2700.0, 5.0], [2800.0, 2.0], [2900.0, 6.0], [3000.0, 7.0], [3100.0, 4.0], [3300.0, 6.0], [3200.0, 5.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 4.0], [3700.0, 6.0], [3800.0, 5.0], [3900.0, 4.0], [4000.0, 3.0], [4200.0, 3.0], [4300.0, 3.0], [4100.0, 1.0], [4400.0, 2.0], [4500.0, 2.0], [4600.0, 1.0], [4800.0, 2.0], [4700.0, 4.0], [5100.0, 1.0], [5000.0, 1.0], [4900.0, 1.0], [5200.0, 3.0], [5500.0, 1.0], [5400.0, 3.0], [5700.0, 3.0], [5800.0, 1.0], [6000.0, 5.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6600.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [7300.0, 2.0], [7200.0, 4.0], [7700.0, 1.0], [8100.0, 1.0], [8200.0, 1.0], [8500.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [8800.0, 1.0], [9300.0, 1.0], [9700.0, 1.0], [9400.0, 1.0], [10000.0, 1.0], [10200.0, 1.0], [9900.0, 1.0], [10100.0, 1.0], [10600.0, 3.0], [10700.0, 1.0], [10300.0, 2.0], [10400.0, 1.0], [11200.0, 2.0], [500.0, 742.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 260.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2240.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2240.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 260.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.114649681528662, "minX": 1.65652752E12, "maxY": 12.89873417721519, "series": [{"data": [[1.65652788E12, 10.548387096774196], [1.65652752E12, 2.8666666666666676], [1.65652758E12, 5.000000000000002], [1.65652818E12, 2.114649681528662], [1.6565283E12, 2.120253164556962], [1.65652824E12, 2.1383647798742134], [1.65652794E12, 2.4906832298136656], [1.65652764E12, 6.694267515923568], [1.65652836E12, 2.133757961783441], [1.6565277E12, 9.012578616352203], [1.65652806E12, 2.234177215189874], [1.656528E12, 2.4810126582278498], [1.65652812E12, 2.3607594936708867], [1.65652782E12, 12.89873417721519], [1.65652776E12, 11.43312101910828], [1.65652842E12, 9.070967741935485]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65652842E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 622.3717834960065, "minX": 1.0, "maxY": 11275.0, "series": [{"data": [[2.0, 622.3717834960065], [3.0, 843.7624999999999], [4.0, 1062.875], [5.0, 1003.3030303030305], [6.0, 1128.5499999999997], [7.0, 1075.13], [8.0, 1012.8928571428572], [9.0, 1213.0357142857144], [10.0, 1381.9340659340658], [11.0, 1287.3020833333333], [12.0, 1183.6162790697674], [13.0, 1014.662790697674], [14.0, 1188.3389830508477], [15.0, 2594.666666666666], [16.0, 2928.947368421052], [1.0, 3929.0], [17.0, 4383.357142857142], [18.0, 4727.4], [19.0, 6084.0], [20.0, 8069.5], [21.0, 6499.5], [22.0, 9404.0], [23.0, 9784.0], [24.0, 10161.0], [25.0, 9932.5], [26.0, 8503.75], [27.0, 6610.25], [28.0, 10537.666666666666], [29.0, 11275.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[5.358399999999996, 998.8859999999986]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 29.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 283.5, "minX": 1.65652752E12, "maxY": 12778.033333333333, "series": [{"data": [[1.65652788E12, 12301.833333333334], [1.65652752E12, 10714.5], [1.65652758E12, 12539.933333333332], [1.65652818E12, 12460.566666666668], [1.6565283E12, 12539.933333333332], [1.65652824E12, 12619.3], [1.65652794E12, 12778.033333333333], [1.65652764E12, 12460.566666666668], [1.65652836E12, 12460.566666666668], [1.6565277E12, 12619.3], [1.65652806E12, 12539.933333333332], [1.656528E12, 12539.933333333332], [1.65652812E12, 12539.933333333332], [1.65652782E12, 12539.933333333332], [1.65652776E12, 12460.566666666668], [1.65652842E12, 12301.833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65652788E12, 325.5], [1.65652752E12, 283.5], [1.65652758E12, 331.8], [1.65652818E12, 329.7], [1.6565283E12, 331.8], [1.65652824E12, 333.9], [1.65652794E12, 338.1], [1.65652764E12, 329.7], [1.65652836E12, 329.7], [1.6565277E12, 333.9], [1.65652806E12, 331.8], [1.656528E12, 331.8], [1.65652812E12, 331.8], [1.65652782E12, 331.8], [1.65652776E12, 329.7], [1.65652842E12, 325.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65652842E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 643.4904458598727, "minX": 1.65652752E12, "maxY": 3225.2967741935495, "series": [{"data": [[1.65652788E12, 2507.0516129032253], [1.65652752E12, 706.9037037037037], [1.65652758E12, 787.4113924050632], [1.65652818E12, 649.1656050955413], [1.6565283E12, 645.3291139240506], [1.65652824E12, 686.6666666666669], [1.65652794E12, 795.3105590062111], [1.65652764E12, 692.9299363057319], [1.65652836E12, 643.4904458598727], [1.6565277E12, 797.8616352201259], [1.65652806E12, 685.4493670886079], [1.656528E12, 761.7025316455696], [1.65652812E12, 729.6202531645571], [1.65652782E12, 754.3481012658226], [1.65652776E12, 942.4012738853504], [1.65652842E12, 3225.2967741935495]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65652842E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 643.4522292993632, "minX": 1.65652752E12, "maxY": 3225.2645161290316, "series": [{"data": [[1.65652788E12, 2506.98064516129], [1.65652752E12, 706.8000000000002], [1.65652758E12, 787.3164556962025], [1.65652818E12, 649.1401273885353], [1.6565283E12, 645.2721518987341], [1.65652824E12, 686.6352201257865], [1.65652794E12, 795.2298136645963], [1.65652764E12, 692.8726114649686], [1.65652836E12, 643.4522292993632], [1.6565277E12, 797.8050314465405], [1.65652806E12, 685.4240506329116], [1.656528E12, 761.6582278481018], [1.65652812E12, 729.5822784810125], [1.65652782E12, 754.3101265822786], [1.65652776E12, 942.3184713375797], [1.65652842E12, 3225.2645161290316]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65652842E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 423.56050955414025, "minX": 1.65652752E12, "maxY": 2203.9806451612876, "series": [{"data": [[1.65652788E12, 1773.193548387097], [1.65652752E12, 488.8666666666668], [1.65652758E12, 527.1962025316453], [1.65652818E12, 433.9681528662421], [1.6565283E12, 426.65822784810126], [1.65652824E12, 443.4025157232706], [1.65652794E12, 560.2981366459628], [1.65652764E12, 463.019108280255], [1.65652836E12, 423.56050955414025], [1.6565277E12, 532.6729559748422], [1.65652806E12, 447.55063291139237], [1.656528E12, 502.41772151898743], [1.65652812E12, 462.89873417721515], [1.65652782E12, 495.37341772151893], [1.65652776E12, 594.700636942675], [1.65652842E12, 2203.9806451612876]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65652842E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 562.0, "minX": 1.65652752E12, "maxY": 11275.0, "series": [{"data": [[1.65652788E12, 11262.0], [1.65652752E12, 2428.0], [1.65652758E12, 6000.0], [1.65652818E12, 2097.0], [1.6565283E12, 1224.0], [1.65652824E12, 1707.0], [1.65652794E12, 3905.0], [1.65652764E12, 2210.0], [1.65652836E12, 1594.0], [1.6565277E12, 3060.0], [1.65652806E12, 3311.0], [1.656528E12, 2347.0], [1.65652812E12, 2691.0], [1.65652782E12, 4811.0], [1.65652776E12, 4497.0], [1.65652842E12, 11275.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65652788E12, 5603.600000000001], [1.65652752E12, 856.2000000000002], [1.65652758E12, 1067.1], [1.65652818E12, 717.8000000000002], [1.6565283E12, 767.3], [1.65652824E12, 779.0], [1.65652794E12, 885.0000000000002], [1.65652764E12, 835.0000000000005], [1.65652836E12, 765.4000000000003], [1.6565277E12, 1328.0], [1.65652806E12, 815.2], [1.656528E12, 1248.6], [1.65652812E12, 915.9], [1.65652782E12, 913.5999999999999], [1.65652776E12, 1683.2000000000003], [1.65652842E12, 8996.400000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65652788E12, 10913.679999999998], [1.65652752E12, 2411.7999999999993], [1.65652758E12, 3957.4199999999882], [1.65652818E12, 1798.8799999999935], [1.6565283E12, 1032.2499999999989], [1.65652824E12, 1463.4000000000024], [1.65652794E12, 3788.439999999999], [1.65652764E12, 2002.3599999999956], [1.65652836E12, 1591.6799999999998], [1.6565277E12, 2615.400000000004], [1.65652806E12, 2271.4199999999937], [1.656528E12, 2104.5099999999984], [1.65652812E12, 2567.0999999999995], [1.65652782E12, 4332.5099999999975], [1.65652776E12, 4356.059999999997], [1.65652842E12, 10963.079999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65652788E12, 7215.4], [1.65652752E12, 1314.3999999999971], [1.65652758E12, 1271.3499999999988], [1.65652818E12, 898.0], [1.6565283E12, 837.6499999999997], [1.65652824E12, 852.0], [1.65652794E12, 2190.200000000002], [1.65652764E12, 1023.5999999999997], [1.65652836E12, 842.6999999999999], [1.6565277E12, 1602.0], [1.65652806E12, 911.3999999999992], [1.656528E12, 1564.6499999999992], [1.65652812E12, 1095.2999999999959], [1.65652782E12, 1055.4999999999998], [1.65652776E12, 2401.799999999996], [1.65652842E12, 10272.599999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65652788E12, 562.0], [1.65652752E12, 564.0], [1.65652758E12, 568.0], [1.65652818E12, 567.0], [1.6565283E12, 564.0], [1.65652824E12, 571.0], [1.65652794E12, 581.0], [1.65652764E12, 570.0], [1.65652836E12, 566.0], [1.6565277E12, 570.0], [1.65652806E12, 571.0], [1.656528E12, 568.0], [1.65652812E12, 568.0], [1.65652782E12, 570.0], [1.65652776E12, 564.0], [1.65652842E12, 574.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65652788E12, 1939.0], [1.65652752E12, 609.0], [1.65652758E12, 646.0], [1.65652818E12, 603.0], [1.6565283E12, 608.5], [1.65652824E12, 665.0], [1.65652794E12, 616.0], [1.65652764E12, 630.0], [1.65652836E12, 600.0], [1.6565277E12, 624.0], [1.65652806E12, 615.5], [1.656528E12, 601.0], [1.65652812E12, 611.5], [1.65652782E12, 615.5], [1.65652776E12, 678.0], [1.65652842E12, 2043.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65652842E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 614.0, "minX": 1.0, "maxY": 7756.0, "series": [{"data": [[2.0, 615.0], [8.0, 2679.5], [9.0, 2380.0], [10.0, 2293.5], [11.0, 3562.0], [3.0, 614.0], [12.0, 2031.0], [14.0, 3424.5], [15.0, 7756.0], [4.0, 826.0], [1.0, 1180.0], [5.0, 1227.0], [6.0, 1298.0], [7.0, 1144.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 614.0, "minX": 1.0, "maxY": 7755.0, "series": [{"data": [[2.0, 615.0], [8.0, 2679.5], [9.0, 2380.0], [10.0, 2293.5], [11.0, 3562.0], [3.0, 614.0], [12.0, 2031.0], [14.0, 3424.5], [15.0, 7755.0], [4.0, 826.0], [1.0, 1180.0], [5.0, 1226.5], [6.0, 1297.5], [7.0, 1143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.283333333333333, "minX": 1.65652752E12, "maxY": 2.6333333333333333, "series": [{"data": [[1.65652788E12, 2.6333333333333333], [1.65652752E12, 2.283333333333333], [1.65652758E12, 2.6166666666666667], [1.65652818E12, 2.6166666666666667], [1.6565283E12, 2.6333333333333333], [1.65652824E12, 2.6333333333333333], [1.65652794E12, 2.6333333333333333], [1.65652764E12, 2.6333333333333333], [1.65652836E12, 2.6333333333333333], [1.6565277E12, 2.6333333333333333], [1.65652806E12, 2.6333333333333333], [1.656528E12, 2.6333333333333333], [1.65652812E12, 2.6333333333333333], [1.65652782E12, 2.6333333333333333], [1.65652776E12, 2.6333333333333333], [1.65652842E12, 2.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65652842E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.25, "minX": 1.65652752E12, "maxY": 2.683333333333333, "series": [{"data": [[1.65652788E12, 2.5833333333333335], [1.65652752E12, 2.25], [1.65652758E12, 2.6333333333333333], [1.65652818E12, 2.6166666666666667], [1.6565283E12, 2.6333333333333333], [1.65652824E12, 2.65], [1.65652794E12, 2.683333333333333], [1.65652764E12, 2.6166666666666667], [1.65652836E12, 2.6166666666666667], [1.6565277E12, 2.65], [1.65652806E12, 2.6333333333333333], [1.656528E12, 2.6333333333333333], [1.65652812E12, 2.6333333333333333], [1.65652782E12, 2.6333333333333333], [1.65652776E12, 2.6166666666666667], [1.65652842E12, 2.5833333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65652842E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.25, "minX": 1.65652752E12, "maxY": 2.683333333333333, "series": [{"data": [[1.65652788E12, 2.5833333333333335], [1.65652752E12, 2.25], [1.65652758E12, 2.6333333333333333], [1.65652818E12, 2.6166666666666667], [1.6565283E12, 2.6333333333333333], [1.65652824E12, 2.65], [1.65652794E12, 2.683333333333333], [1.65652764E12, 2.6166666666666667], [1.65652836E12, 2.6166666666666667], [1.6565277E12, 2.65], [1.65652806E12, 2.6333333333333333], [1.656528E12, 2.6333333333333333], [1.65652812E12, 2.6333333333333333], [1.65652782E12, 2.6333333333333333], [1.65652776E12, 2.6166666666666667], [1.65652842E12, 2.5833333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65652842E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.25, "minX": 1.65652752E12, "maxY": 2.683333333333333, "series": [{"data": [[1.65652788E12, 2.5833333333333335], [1.65652752E12, 2.25], [1.65652758E12, 2.6333333333333333], [1.65652818E12, 2.6166666666666667], [1.6565283E12, 2.6333333333333333], [1.65652824E12, 2.65], [1.65652794E12, 2.683333333333333], [1.65652764E12, 2.6166666666666667], [1.65652836E12, 2.6166666666666667], [1.6565277E12, 2.65], [1.65652806E12, 2.6333333333333333], [1.656528E12, 2.6333333333333333], [1.65652812E12, 2.6333333333333333], [1.65652782E12, 2.6333333333333333], [1.65652776E12, 2.6166666666666667], [1.65652842E12, 2.5833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65652842E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

