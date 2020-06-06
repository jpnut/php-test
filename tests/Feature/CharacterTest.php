<?php

namespace Tests\Feature;

use Tests\TestCase;

class CharacterTest extends TestCase
{
    /**
     * @return void
     */
    public function testRedirectsDefaultToCharacter()
    {
        $response = $this->get('/');

        $response->assertStatus(302);
        $response->assertRedirect('character');
    }

    public function testReturnsCharacterList()
    {
        $response = $this->get('character');

        $response->assertStatus(200);
    }
}
