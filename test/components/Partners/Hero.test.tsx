import React from 'react';
import { shallow } from 'enzyme';
import { Col, Row } from 'antd';
import header from '@images/partners/partners-hero.svg';
import Hero, { HeroArt } from '@components/Partners/Hero';
import { HeroText } from '@src/Styles';

describe('<Hero />', () => {
  it('renders section with minHeight 300px', () => {
    const component = shallow(<Hero />);
    expect(component.find('section').props().style).to.deep.equal({
      background: '#181E26',
      minHeight: '300px'
    });
  });

  it('renders one Row component', () => {
    const component = shallow(<Hero />);
    const rowComponent = component.find(Row);
    const rowComponentProps = rowComponent.props();
    expect(rowComponent).to.have.length(1);
    expect(rowComponentProps.type).to.equal('flex');
    expect(rowComponentProps.className).to.equal('hero');
  });

  it('renders two Col components', () => {
    const component = shallow(<Hero />);
    const colComponents = component.find(Col);
    const firstColComponentProps = colComponents.at(0).props();
    const secondColComponentProps = colComponents.at(1).props();
    expect(colComponents).to.have.length(2);
    expect(firstColComponentProps.xs).to.equal(24);
    expect(secondColComponentProps.md).to.equal(10);
  });

  it('renders secondcolumn with alignitems end', () => {
    const component = shallow(<Hero />);
    const colComponents = component.find(Col);
    const secondColComponentProps = colComponents.at(1).props();
    expect(secondColComponentProps.style).to.deep.equal({
      display: 'grid',
      alignItems: 'end'
    });
  });

  it('renders HeroText with title text', () => {
    const component = shallow(<Hero />);
    expect(
      component
        .find(HeroText)
        .render()
        .text()
    ).to.equal('Build on top of MARKET Protocol');
  });

  it('renders HeroArt with image', () => {
    const component = shallow(<Hero />);
    const imgComponentProps = component
      .find(HeroArt)
      .find('img')
      .props();
    expect(imgComponentProps.alt).to.equal('MARKET partners');
    expect(imgComponentProps.src).to.equal(header);
  });
});
