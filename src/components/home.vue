<template>
    <div>
        <div style="background-color: #ececec; padding: 20px; margin: 20px 0;">       
            <a-row :gutter="16">
                <a-col :span="8">
                    <a-card title="Card title" :bordered=false class="highlight  highlight-large reveal light">
                    <p>card content</p>
                    </a-card>
                </a-col>
                <a-col :span="8">
                    <a-card title="Card title" :bordered=false class="highlight highlight-large reveal light">
                    <p>card content</p>
                    </a-card> 
                </a-col>
                <a-col :span="8">
                    <a-card title="Card title" :bordered=false class="highlight highlight-large reveal light">
                    <p>card content </p>
                    </a-card>   
                </a-col>
            </a-row>
        </div>
        <a-row :gutter="16">
                <a-col :span="8">
                     <a-card hoverable style="width: 240px;" class="highlight reveal light">
                        <img
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            slot="cover"
                        />
                        <a-card-meta
                            title="Europe Street beat">
                            <template slot="description">www.instagram.com</template>
                        </a-card-meta>
                    </a-card>
                </a-col>
                <a-col :span="7" style="background-color: rgb(43, 43, 43); padding: 20px; margin: 20px 0;">
                    <a-button type="primary" icon="search" class="highlight highlight-small reveal">Search</a-button>
                    <a-button type="primary" icon="edit" class="highlight highlight-small reveal">Edit</a-button>
                    <a-button type="primary" icon="save" class="highlight highlight-small reveal">Save</a-button>
                    
                </a-col>
                <a-col :span="7" style="background-color: #ececec; padding: 20px; margin: 20px 0;">
                    <a-button icon="search" class="highlight highlight-small reveal light">Search</a-button>
                    <a-button icon="edit" class="highlight highlight-small reveal light">Edit</a-button>
                    <a-button icon="save" class="highlight highlight-small reveal light">Save</a-button>
                </a-col>
        </a-row>
        <a-input class="highlight highlight-small reveal light" value="I'm an input"/>

        <formComponent/>
    </div>
</template>

<script>
import formComponent from "@/components/form"
export default {
    components: {
        formComponent
    }
}
</script>

<style>

</style>
