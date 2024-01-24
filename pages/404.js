import React from 'react'
import { Helmet } from 'react-helmet'
import Link from 'next/link'
import { Button, Header } from 'flotiq-components-react'
import Layout from '../layouts/layout'

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Página não encontrada</title>
        </Helmet>
        <Header alignment="center" additionalClasses={['my-20', '!py-20']}>
            Página não encontrada, desculpe
        </Header>
        <div className="text-center my-20 py-20">
            {/* Example usage of button */}
            <Link href="/" passHref>
                <a href="replace">
                    <Button label="Voltar para o inicio" />
                </a>
            </Link>
        </div>
    </Layout>
)

export default NotFoundPage
