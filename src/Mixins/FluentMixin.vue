<script>
import '../style/fluent-for-ant.less'
import {reveal} from "../fluent"
export default {
    data() {
        return {
            fluentObserver: {}
        }
    },
    mounted() {
        // Select the node that will be observed for mutations
        const targetNode = document;

        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            reveal();
        };

        // Create an observer instance linked to the callback function
        this.fluentObserver = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        this.fluentObserver.observe(targetNode, config);        
       
    },
    updated() {
        reveal();
    },
    beforeDestroy() {
        // Later, you can stop observing
        this.fluentObserver.disconnect();
    }
}
</script>
