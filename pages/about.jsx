import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`About | ${BLOG_NAME}`}</title>
      </Head>
      <Container>
        <PageHeading>Hi, I am Sanjiv.</PageHeading>
        <section className="max-w-3xl py-8 md:pt-8 md:pb-36">
          <p>
          I am a machine learning engineer. I work on problems that are at the intersection of modalities - image/video, audio and text. 

          I am interested in the model fine-tuning and making trained models faster and lighter. I also love deploying models using inference efficient frameworks like NVIDIA Triton, Intel OpenVino and Deepstream in production. 
          </p>
          
        </section>
      </Container>
    </Layout>
  )
}
