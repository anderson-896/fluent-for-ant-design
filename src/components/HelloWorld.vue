<template>
	<a-layout id="components-layout-demo-custom-trigger">
		<a-layout-sider class="acrylic" :trigger="null" collapsible v-model="collapsed" width="300px" :collapsedWidth="48" style="overflow: hidden; position: fixed;  height: 100%; z-index: 1;">
			<div class="logo" />
            <div class="ant-menu ant-menu-vertical ant-menu-root ant-menu-dark ant-menu-inline">
                <li class="fl-border reveal hamburguer" style="cursor: pointer; width: 100%; color: white; font-size: 16px;" @click="()=> collapsed = !collapsed" >
                    <a-icon style="width: 14px;" :component="MenuSvg" />
                </li>
            </div>
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="[]">               
				<a-menu-item key="1" class="fl-border reveal">
					<a-icon type="user" />
					<span>nav 1</span>
				</a-menu-item>
				<a-menu-item key="2" class="fl-border reveal">
                    <a-icon type="video-camera" />
                    <span>nav 2</span>
				</a-menu-item>
				<a-menu-item key="3" class="fl-border reveal light">
                    <a-icon type="upload" />
                    <span>nav 3</span> 
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout style="position: absolute; left: 48px; z-index: 0; width: calc(100vw - 65px);">
            <a-layout-header class="acrylic light" style=" padding: 0 20px; position: fixed; z-index: 2; width: 100%;">
               
                Fluent for Ant Design Vue
            </a-layout-header>
            <a-layout-content :style="{ padding: '90px 24px', background: '#fff', minHeight: 'auto', }">
                <home/>
            </a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script>
const MenuSvg = {
  template: `
    <svg class="icon" viewBox="45 45 700 700" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M177.50016 307.2h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96zM177.50016 757.76h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96zM177.50016 532.48h614.4a20.48 20.48 0 1 0 0-40.96h-614.4a20.48 20.48 0 1 0 0 40.96z">
        </path>
    </svg>            
  `
}

import {reveal} from "@/fluent"
import home from "@/components/home"
export default {
	data(){
		return {
            MenuSvg,
            collapsed: true,
            size: 'large',
		}
    },
    mounted() {
        reveal();
    },
    components: {home}
}
</script>
<style>
#components-layout-demo-custom-trigger {
	height: 100vh;
}

#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
	height: 36px;
	/* background: rgba(255,255,255,.2); */
    margin: 14px;
    background-image: url(../assets/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
}
</style>
